import {
    redirect
} from "next/navigation";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";

import ApproveButton from "@/app/cms/components/ApproveButton";

import DeleteArticleButton from "@/app/cms/components/DeleteArticleButton";



export default async function ArticleDetailPage({

    params,

}: {

    params: Promise<{
        id: string;
    }>;

}) {



    const session =
        await getSession();



    if (!session) {

        redirect(
            "/cms/login"
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



    return (

        <div>



            {/* HEADER */}

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

                    Article Detail

                </h1>



                <div className="
                    flex
                    items-center
                    gap-4
                ">


                    {/* EDIT — ADMIN ONLY */}

                    {

                        session.role ===
                        "ADMIN" && (

                            <a

                                href={
                                    `/cms/articles/${article._id.toString()}/edit`
                                }

                                className="
                                    bg-[#0B132B]
                                    text-white
                                    px-4
                                    py-2
                                    rounded
                                    text-sm
                                    hover:opacity-90
                                "

                            >

                                Edit Article

                            </a>

                        )

                    }



                    {/* DELETE — ADMIN ONLY */}

                    <DeleteArticleButton

                        id={
                            article._id.toString()
                        }

                        role={
                            session.role
                        }

                    />



                    <a

                        href="/cms/articles"

                        className="
                            text-sm
                            text-gray-500
                            hover:text-[#0B132B]
                        "

                    >

                        ← Back

                    </a>


                </div>


            </div>





            {/* ARTICLE CONTENT */}

            <div className="
                bg-white
                rounded-xl
                p-8
                space-y-6
            ">




                {/* TITLE */}

                <h2 className="
                    text-2xl
                    font-semibold
                    text-[#0B132B]
                ">

                    {
                        article.title
                    }

                </h2>






                {/* AUTHOR + STATUS */}

                <div className="
                    space-y-2
                ">


                    <p>

                        <span className="
                            font-semibold
                        ">

                            Author:

                        </span>

                        {" "}

                        {
                            article.author
                        }

                    </p>



                    <p>

                        <span className="
                            font-semibold
                        ">

                            Status:

                        </span>

                        {" "}

                        <span
                            className={`
                                inline-block
                                px-3
                                py-1
                                rounded-full
                                text-xs
                                font-medium

                                ${
                                    article.status ===
                                    "APPROVED"

                                    ? "bg-green-100 text-green-700"

                                    : "bg-yellow-100 text-yellow-700"
                                }
                            `}
                        >

                            {
                                article.status
                            }

                        </span>

                    </p>



                    {

                        article.approvedBy &&

                        <p>

                            <span className="
                                font-semibold
                            ">

                                Approved By:

                            </span>

                            {" "}

                            {
                                article.approvedBy
                            }

                        </p>

                    }


                </div>







                {/* APPROVED NOTICE */}

                {

                    article.status ===
                    "APPROVED" &&

                    <div className="
                        bg-green-50
                        border
                        border-green-200
                        rounded-lg
                        p-4
                    ">

                        <p className="
                            text-green-700
                            font-medium
                        ">

                            ✓ Article Approved

                        </p>



                        <p className="
                            text-green-600
                            text-sm
                            mt-1
                        ">

                            This article is ready to be published.

                        </p>

                    </div>

                }







                {/* EXCERPT */}

                <div>


                    <h3 className="
                        font-semibold
                        mb-2
                    ">

                        Excerpt

                    </h3>



                    <p>

                        {
                            article.excerpt
                        }

                    </p>


                </div>







                {/* CONTENT */}

                <div>


                    <h3 className="
                        font-semibold
                        mb-2
                    ">

                        Content

                    </h3>



                    <p className="
                        whitespace-pre-line
                    ">

                        {
                            article.content
                        }

                    </p>


                </div>







                {/* IMAGE */}

                {

                    article.image &&

                    <div>


                        <h3 className="
                            font-semibold
                            mb-3
                        ">

                            Image

                        </h3>



                        <div className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            max-w-3xl
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
                                    max-h-[500px]
                                    object-contain
                                    bg-gray-100
                                "

                            />


                        </div>



                        <p className="
                            mt-3
                            break-all
                            text-sm
                            text-gray-500
                        ">

                            {
                                article.image
                            }

                        </p>


                    </div>

                }







                {/* APPROVE — MANAGING PARTNER ONLY */}

                {

                    article.status ===
                    "PENDING" &&

                    session.role ===
                    "MANAGING_PARTNER" &&

                    <ApproveButton

                        id={
                            article._id.toString()
                        }

                    />

                }


            </div>


        </div>

    );

}