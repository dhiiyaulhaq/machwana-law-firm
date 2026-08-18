import {
    redirect
} from "next/navigation";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";

import {
    put
} from "@vercel/blob";

import path from "path";



function createSlug(
    value: string
) {

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



export default async function CreateArticlePage() {



    /*
        PAGE-LEVEL AUTHORIZATION

        ONLY ADMIN CAN ACCESS
        CREATE ARTICLE PAGE
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



    async function createArticle(
        formData: FormData
    ) {

        "use server";



        /*
            SERVER-SIDE AUTHORIZATION

            Role check is repeated inside
            the Server Action so that the
            action cannot be bypassed directly.
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
            CREATE SLUG
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
        */

        const existingArticle =
            await Article.findOne({
                slug
            });



        if (existingArticle) {

            return;

        }



        /*
            IMAGE URL

            Empty when no image is uploaded.
        */

        let imageUrl =
            "";



        /*
            IMAGE UPLOAD
            USING VERCEL BLOB
        */

        if (
            imageValue instanceof File &&
            imageValue.size > 0
        ) {


            /*
                Vercel function request body
                limit is 4.5 MB.

                We use 4 MB here to leave
                room for multipart/form-data.
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
                Store article images under
                the "articles/" prefix.
            */

            const blob =
                await put(
                    `articles/${fileName}`,
                    imageValue,
                    {
                        access: "public",
                        contentType:
                            imageValue.type
                    }
                );



            imageUrl =
                blob.url;

        }



        /*
            CREATE ARTICLE

            New articles always start
            as PENDING.

            Managing Partner must approve
            the article before it appears
            publicly.
        */

        await Article.create({

            title,

            slug,

            excerpt,

            content,

            image:
                imageUrl,

            author:
                currentSession.email,

            status:
                "PENDING"

        });



        redirect(
            "/cms/articles"
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

                    Create Article

                </h1>



                <a

                    href="/cms/articles"

                    className="
                        text-sm
                        text-gray-500
                        hover:text-[#0B132B]
                    "

                >

                    ← Back to Articles

                </a>


            </div>





            {/* FORM */}

            <form

                action={
                    createArticle
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

                        placeholder="
                            Article title
                        "

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

                        placeholder="
                            Short description
                        "

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

                        placeholder="
                            Article content
                        "

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





                {/* IMAGE */}

                <div>


                    <label className="
                        block
                        font-medium
                        mb-2
                    ">

                        Article Image

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

                        Accepted:
                        JPG, JPEG, PNG, WEBP,
                        GIF. Maximum 4 MB.

                    </p>


                </div>





                {/* BUTTON */}

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

                    Save Article

                </button>


            </form>


        </div>

    );

}