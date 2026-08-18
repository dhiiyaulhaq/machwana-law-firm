import Link from "next/link";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";



export default async function ArticlesPage() {


    const session =
        await getSession();



    if (!session) {

        return null;

    }



    await connectDB();



    const articles =
        await Article
            .find({})
            .sort({
                createdAt: -1
            })
            .lean();



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

                    Articles

                </h1>



                {

                    session.role ===
                    "ADMIN" && (

                        <Link

                            href="/cms/articles/create"

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

                            Create Article

                        </Link>

                    )

                }


            </div>







            <div className="
                bg-white
                rounded-xl
                shadow-sm
                overflow-hidden
            ">


                <table className="
                    w-full
                ">


                    <thead>


                        <tr className="
                            border-b
                        ">


                            <th className="
                                text-left
                                p-5
                            ">

                                Title

                            </th>



                            <th className="
                                text-left
                                p-5
                            ">

                                Author

                            </th>



                            <th className="
                                text-left
                                p-5
                            ">

                                Status

                            </th>



                            <th className="
                                text-left
                                p-5
                            ">

                                Action

                            </th>


                        </tr>


                    </thead>







                    <tbody>


                        {

                            articles.map(
                                (article: any) => (

                                    <tr

                                        key={
                                            article._id.toString()
                                        }

                                        className="
                                            border-b
                                        "

                                    >



                                        <td className="
                                            p-5
                                        ">

                                            {
                                                article.title
                                            }

                                        </td>



                                        <td className="
                                            p-5
                                        ">

                                            {
                                                article.author
                                            }

                                        </td>



                                        <td className="
                                            p-5
                                        ">

                                            <span className={`
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
                                            `}>

                                                {
                                                    article.status
                                                }

                                            </span>

                                        </td>



                                        <td className="
                                            p-5
                                        ">

                                            <Link

                                                href={
                                                    `/cms/articles/${article._id.toString()}`
                                                }

                                                className="
                                                    text-[#0B132B]
                                                    hover:underline
                                                "

                                            >

                                                View

                                            </Link>

                                        </td>


                                    </tr>

                                )

                            )

                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

}