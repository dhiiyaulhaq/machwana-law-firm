"use client";

import Link from "next/link";


const menus = [
    {
        name: "Dashboard",
        href: "/cms/dashboard",
    },
    {
        name: "Articles",
        href: "/cms/articles",
    },
];


export default function Sidebar() {


    return (

        <aside className="
            w-64
            min-h-screen
            bg-[#0B132B]
            text-white
            p-6
        ">


            {/* BRAND */}

            <h2 className="
                text-xl
                font-bold
                mb-10
            ">

                Machwana CMS

            </h2>



            {/* NAVIGATION */}

            <nav className="
                space-y-4
            ">


                {menus.map((item) => (

                    <Link

                        key={item.name}

                        href={item.href}

                        className="
                            block
                            px-4
                            py-2
                            rounded
                            hover:bg-white/10
                            transition
                        "

                    >

                        {item.name}

                    </Link>

                ))}


            </nav>


        </aside>

    );

}