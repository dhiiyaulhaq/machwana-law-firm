import Link from "next/link";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import Navbar from "@/app/components/layout/Navbar";

import Footer from "@/app/components/home/Footer";



export default async function NewsPage() {


    await connectDB();



    const articles =
        await Article
            .find({
                status: "APPROVED"
            })
            .sort({
                createdAt: -1
            })
            .lean();



    return (

        <>

            {/* NAVBAR */}

            <Navbar />



            <main className="
                min-h-screen
                bg-white
            ">



                {/* HERO */}

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



                    {/* HERO CONTENT */}

                    <div className="
                        relative
                        z-10
                        mx-auto
                        max-w-7xl
                    ">


                        <p className="
                            mb-4
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-orange-400
                        ">

                            News

                        </p>



                        <h1 className="
                            text-4xl
                            font-semibold
                            leading-tight
                            md:text-5xl
                        ">

                            Latest News

                        </h1>



                        <p className="
                            mt-6
                            max-w-2xl
                            text-base
                            leading-relaxed
                            text-gray-300
                        ">

                            Stay informed with the latest legal
                            developments, firm news, and perspectives
                            from Machwana Law Office.

                        </p>


                    </div>


                </section>





                {/* ARTICLES */}

                <section className="
                    px-6
                    py-16
                ">


                    <div className="
                        mx-auto
                        max-w-7xl
                    ">


                        {

                            articles.length === 0

                            ?

                            <div className="
                                rounded-xl
                                border
                                border-gray-200
                                p-12
                                text-center
                            ">


                                <h2 className="
                                    text-2xl
                                    font-semibold
                                    text-[#0B132B]
                                ">

                                    No news available

                                </h2>


                                <p className="
                                    mt-3
                                    text-gray-500
                                ">

                                    Approved news and articles
                                    will appear here.

                                </p>


                            </div>

                            :

                            <div className="
                                grid
                                gap-8
                                md:grid-cols-2
                                lg:grid-cols-3
                            ">


                                {

                                    articles.map(
                                        (article) => (

                                            <article

                                                key={
                                                    article._id.toString()
                                                }

                                                className="
                                                    overflow-hidden
                                                    rounded-2xl
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    transition
                                                    duration-300
                                                    hover:-translate-y-1
                                                    hover:shadow-xl
                                                "

                                            >


                                                {

                                                    article.image &&

                                                    <div className="
                                                        h-56
                                                        overflow-hidden
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
                                                                h-full
                                                                w-full
                                                                object-cover
                                                            "

                                                        />


                                                    </div>

                                                }



                                                <div className="
                                                    p-7
                                                ">


                                                    <p className="
                                                        text-xs
                                                        font-medium
                                                        uppercase
                                                        tracking-[0.18em]
                                                        text-orange-500
                                                    ">

                                                        News

                                                    </p>



                                                    <h2 className="
                                                        mt-3
                                                        text-2xl
                                                        font-semibold
                                                        leading-snug
                                                        text-[#0B132B]
                                                    ">

                                                        {
                                                            article.title
                                                        }

                                                    </h2>



                                                    <p className="
                                                        mt-4
                                                        text-sm
                                                        leading-7
                                                        text-gray-600
                                                    ">

                                                        {
                                                            article.excerpt
                                                        }

                                                    </p>



                                                    <Link

                                                        href={
                                                            `/news/${article.slug}`
                                                        }

                                                        className="
                                                            mt-6
                                                            inline-flex
                                                            items-center
                                                            text-sm
                                                            font-semibold
                                                            text-[#0B132B]
                                                            transition
                                                            hover:text-orange-500
                                                        "

                                                    >

                                                        Read More

                                                        <span className="
                                                            ml-2
                                                        ">

                                                            →

                                                        </span>

                                                    </Link>


                                                </div>


                                            </article>

                                        )
                                    )

                                }


                            </div>

                        }


                    </div>


                </section>


            </main>



            {/* FOOTER */}

            <Footer />

        </>

    );

}