import { redirect } from "next/navigation";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import { getSession } from "@/app/lib/auth";

import { put } from "@vercel/blob";

import path from "path";



function createSlug(value: string) {

    return value
        .toLowerCase()
        .trim()
        .replace(
            /[^a-z0-9\s-]/g,
            ""
        )
        .replace(
            /\s+/g,
            "-"
        )
        .replace(
            /-+/g,
            "-"
        );

}



function createFileName(
    originalName: string
) {

    const extension =
        path.extname(
            originalName
        ).toLowerCase();



    const allowedExtensions = [

        ".jpg",

        ".jpeg",

        ".png",

        ".webp",

        ".gif"

    ];



    const safeExtension =
        allowedExtensions.includes(
            extension
        )
            ? extension
            : ".jpg";



    return (
        `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)}${safeExtension}`
    );

}



export default async function EditArticlePage({

    params,

}: {

    params: Promise<{
        id: string;
    }>;

}) {



    /*
        PAGE-LEVEL AUTHORIZATION

        ONLY ADMIN CAN OPEN
        EDIT ARTICLE PAGE
    */

    const session =
        await getSession();



    if (!session) {

        redirect(
            "/cms/login"
        );

    }



    if (
        session.role !==
        "ADMIN"
    ) {

        redirect(
            "/cms/articles"
        );

    }



    const {
        id
    } = await params;



    await connectDB();



    const article =
        await Article.findById(
            id
        ).lean();



    if (!article) {

        return (

            <div className="p-10">

                <h1 className="
                    text-xl
                    font-semibold
                    text-[#0B132B]
                ">

                    Article not found

                </h1>

            </div>

        );

    }



    async function updateArticle(
        formData: FormData
    ) {

        "use server";



        /*
            SERVER-SIDE AUTHORIZATION

            Role check is repeated inside
            the Server Action.
        */

        const currentSession =
            await getSession();



        if (!currentSession) {

            redirect(
                "/cms/login"
            );

        }



        if (
            currentSession.role !==
            "ADMIN"
        ) {

            redirect(
                "/cms/articles"
            );

        }



        await connectDB();



        const title =
            String(
                formData.get(
                    "title"
                ) || ""
            ).trim();



        const excerpt =
            String(
                formData.get(
                    "excerpt"
                ) || ""
            ).trim();



        const content =
            String(
                formData.get(
                    "content"
                ) || ""
            ).trim();



        const imageValue =
            formData.get(
                "image"
            );



        /*
            BASIC VALIDATION
        */

        if (
            !title ||
            !excerpt ||
            !content
        ) {

            return;

        }



        /*
            CREATE NEW SLUG
        */

        const slug =
            createSlug(
                title
            );



        if (!slug) {

            return;

        }



        /*
            DUPLICATE SLUG CHECK

            Ignore current article itself.
        */

        const duplicateArticle =
            await Article.findOne({

                slug,

                _id: {
                    $ne: id
                }

            });



        if (
            duplicateArticle
        ) {

            return;

        }



        const currentArticle =
            await Article.findById(
                id
            );



        if (
            !currentArticle
        ) {

            return;

        }



        /*
            UPDATE TEXT FIELDS
        */

        currentArticle.title =
            title;



        currentArticle.slug =
            slug;



        currentArticle.excerpt =
            excerpt;



        currentArticle.content =
            content;



        /*
            IMAGE UPDATE

            If a new image is selected,
            upload it to Vercel Blob.

            If no new image is selected,
            keep the existing image.
        */

        if (
            imageValue instanceof File &&
            imageValue.size > 0
        ) {


            /*
                Keep upload safely below
                Vercel's function payload limit.
            */

            const maxFileSize =
                4 * 1024 * 1024;



            if (
                imageValue.size >
                maxFileSize
            ) {

                return;

            }



            const allowedTypes = [

                "image/jpeg",

                "image/png",

                "image/webp",

                "image/gif"

            ];



            if (
                !allowedTypes.includes(
                    imageValue.type
                )
            ) {

                return;

            }



            const fileName =
                createFileName(
                    imageValue.name
                );



            /*
                Upload to Vercel Blob.
            */

            const blob =
                await put(

                    `articles/${fileName}`,

                    imageValue,

                    {

                        access:
                            "public",

                        contentType:
                            imageValue.type

                    }

                );



            /*
                Save the permanent Blob URL
                into MongoDB.
            */

            currentArticle.image =
                blob.url;

        }



        /*
            IMPORTANT WORKFLOW

            If an APPROVED article is edited,
            it must become PENDING again.

            Previous approval is removed.
        */

        if (
            currentArticle.status ===
            "APPROVED"
        ) {

            currentArticle.status =
                "PENDING";



            currentArticle.approvedBy =
                undefined;

        }



        await currentArticle.save();



        redirect(
            `/cms/articles/${id}`
        );

    }



    return (

        <div>



            {/* PAGE HEADER */}

            <div className="
                flex
                justify-between
                items-center
                mb-8
            ">


                <h1 className="
                    text-3xl
                    font-semibold
                    text-[#0B132B]
                ">

                    Edit Article

                </h1>



                <a

                    href={
                        `/cms/articles/${id}`
                    }

                    className="
                        text-sm
                        text-gray-500
                        hover:text-[#0B132B]
                    "

                >

                    ← Back to Article

                </a>


            </div>





            {/* FORM */}

            <form

                action={
                    updateArticle
                }

                encType="
                    multipart/form-data
                "

                className="
                    bg-white
                    rounded-xl
                    p-8
                    space-y-6
                "

            >



                {/* TITLE */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Title

                    </label>



                    <input

                        type="text"

                        name="title"

                        defaultValue={
                            article.title
                        }

                        required

                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-3
                            outline-none
                            focus:border-[#0B132B]
                        "

                    />

                </div>





                {/* SLUG */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Slug

                    </label>



                    <input

                        type="text"

                        value={
                            createSlug(
                                article.title
                            )
                        }

                        readOnly

                        className="
                            w-full
                            border
                            border-gray-200
                            bg-gray-50
                            text-gray-500
                            rounded-md
                            px-4
                            py-3
                        "

                    />



                    <p className="
                        mt-2
                        text-xs
                        text-gray-500
                    ">

                        Slug is generated automatically
                        from the article title.

                    </p>


                </div>





                {/* EXCERPT */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Excerpt

                    </label>



                    <textarea

                        name="excerpt"

                        defaultValue={
                            article.excerpt
                        }

                        required

                        rows={4}

                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-3
                            outline-none
                            focus:border-[#0B132B]
                        "

                    />

                </div>





                {/* CONTENT */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Content

                    </label>



                    <textarea

                        name="content"

                        defaultValue={
                            article.content
                        }

                        required

                        rows={12}

                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-3
                            outline-none
                            focus:border-[#0B132B]
                        "

                    />

                </div>





                {/* CURRENT IMAGE */}

                {
                    article.image &&

                    <div>


                        <label className="
                            block
                            font-medium
                            mb-3
                        ">

                            Current Image

                        </label>



                        <div className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            max-w-2xl
                        ">


                            <img

                                src={
                                    article.image
                                }

                                alt={
                                    article.title
                                }

                                className="
                                    block
                                    w-full
                                    max-h-[400px]
                                    object-contain
                                    bg-gray-100
                                "

                            />


                        </div>



                        <p className="
                            mt-2
                            break-all
                            text-xs
                            text-gray-500
                        ">

                            {
                                article.image
                            }

                        </p>


                    </div>

                }





                {/* REPLACE IMAGE */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Replace Image

                    </label>



                    <input

                        type="file"

                        name="image"

                        accept="
                            image/jpeg,
                            image/png,
                            image/webp,
                            image/gif
                        "

                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-md
                            px-4
                            py-3
                            outline-none
                            focus:border-[#0B132B]
                            bg-white
                        "

                    />



                    <p className="
                        mt-2
                        text-xs
                        text-gray-500
                    ">

                        Leave empty to keep the current image.
                        JPG, JPEG, PNG, WEBP, GIF.
                        Maximum 4 MB.

                    </p>


                </div>





                {/* ACTIONS */}

                <div className="
                    flex
                    gap-4
                    items-center
                ">


                    <button

                        type="submit"

                        className="
                            bg-[#0B132B]
                            text-white
                            px-5
                            py-3
                            rounded-md
                            text-sm
                            hover:opacity-90
                        "

                    >

                        Save Changes

                    </button>



                    <a

                        href={
                            `/cms/articles/${id}`
                        }

                        className="
                            text-sm
                            text-gray-500
                            hover:text-[#0B132B]
                        "

                    >

                        Cancel

                    </a>


                </div>


            </form>


        </div>

    );

}