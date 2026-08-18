import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import ApproveButton from "@/app/cms/components/ApproveButton";



export default async function ArticleDetailPage({

    params,

}: {

    params: Promise<{
        id: string;
    }>;

}) {



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





            <div className="
                bg-white
                rounded-xl
                p-8
                space-y-6
            ">




                <h2 className="
                    text-2xl
                    font-semibold
                    text-[#0B132B]
                ">

                    {
                        article.title
                    }

                </h2>






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
                                    article.status === "APPROVED"
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







                {

                    article.status === "APPROVED" &&

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






                {

                    article.image &&

                    <div>


                        <h3 className="
                            font-semibold
                            mb-2
                        ">

                            Image

                        </h3>


                        <p className="
                            break-all
                            text-sm
                            text-gray-600
                        ">

                            {
                                article.image
                            }

                        </p>


                    </div>

                }






                {

                    article.status === "PENDING" &&

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