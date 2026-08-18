import Link from "next/link";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import Navbar from "@/app/components/layout/Navbar";

import Footer from "@/app/components/home/Footer";



export default async function NewsDetailPage({

    params,

}: {

    params: Promise<{
        slug: string;
    }>;

}) {



    const {
        slug
    } = await params;



    await connectDB();



    const article =
        await Article.findOne({

            slug,

            status:
                "APPROVED"

        }).lean();



    if (!article) {

        return (

            <>

                {/* NAVBAR */}

                <Navbar />



                <main className="
                    min-h-screen
                    bg-white
                    px-6
                    py-32
                ">

                    <div className="
                        mx-auto
                        max-w-4xl
                    ">


                        <Link

                            href="/news"

                            className="
                                text-sm
                                text-gray-500
                                transition
                                hover:text-orange-500
                            "

                        >

                            ← Back to News

                        </Link>



                        <div className="
                            mt-12
                        ">


                            <p className="
                                text-xs
                                uppercase
                                tracking-[0.25em]
                                text-orange-500
                            ">

                                News

                            </p>


                            <h1 className="
                                mt-4
                                text-4xl
                                font-semibold
                                text-[#0B132B]
                            ">

                                Article not found

                            </h1>


                            <p className="
                                mt-4
                                text-gray-500
                            ">

                                The requested article is unavailable
                                or has not been approved.

                            </p>


                        </div>


                    </div>

                </main>



                {/* FOOTER */}

                <Footer />

            </>

        );

    }



    return (

        <>

            {/* NAVBAR */}

            <Navbar />



            <main className="
                min-h-screen
                bg-white
            ">


                {/* HEADER */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-cover
                        bg-center
                        bg-no-repeat
                        px-6
                        py-32
                        text-white
                    "
                    style={{
                        backgroundImage:
                            "url('/images/hero-building.jpg')",
                    }}
                >


                    {/* DARK OVERLAY */}

                    <div className="
                        absolute
                        inset-0
                        bg-[#020617]/75
                    " />



                    {/* HEADER CONTENT */}

                    <div className="
                        relative
                        z-10
                        mx-auto
                        max-w-5xl
                    ">


                        <Link

                            href="/news"

                            className="
                                inline-flex
                                text-sm
                                text-gray-300
                                transition
                                hover:text-white
                            "

                        >

                            ← Back to News

                        </Link>



                        <p className="
                            mt-10
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-orange-400
                        ">

                            News

                        </p>



                        <h1 className="
                            mt-4
                            text-4xl
                            font-semibold
                            leading-tight
                            md:text-5xl
                        ">

                            {
                                article.title
                            }

                        </h1>


                    </div>


                </section>





                {/* ARTICLE */}

                <article className="
                    px-6
                    py-16
                ">


                    <div className="
                        mx-auto
                        max-w-4xl
                    ">


                        {

                            article.image &&

                            <div className="
                                mb-10
                                overflow-hidden
                                rounded-2xl
                                bg-gray-100
                            ">


                                <img

                                    src={
                                        article.image
                                    }

                                    alt={
                                        article.title
                                    }

                                    className="
                                        h-auto
                                        max-h-[560px]
                                        w-full
                                        object-cover
                                    "

                                />


                            </div>

                        }



                        <div className="
                            border-b
                            border-gray-200
                            pb-8
                        ">


                            <p className="
                                text-lg
                                leading-8
                                text-gray-600
                            ">

                                {
                                    article.excerpt
                                }

                            </p>



                            <div className="
                                mt-6
                                flex
                                flex-wrap
                                gap-x-6
                                gap-y-2
                                text-sm
                                text-gray-500
                            ">


                                <span>

                                    By {article.author}

                                </span>


                            </div>


                        </div>



                        <div className="
                            pt-10
                            whitespace-pre-line
                            text-base
                            leading-8
                            text-gray-700
                        ">

                            {
                                article.content
                            }

                        </div>


                    </div>


                </article>


            </main>



            {/* FOOTER */}

            <Footer />

        </>

    );

}