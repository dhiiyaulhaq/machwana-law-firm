import { getSession } from "@/app/lib/auth";
import { redirect } from "next/navigation";


export default async function DashboardPage(){

    const session =
        await getSession();


    if(!session){

        redirect("/cms/login");

    }


    return (

        <main
        className="
        min-h-screen
        bg-slate-950
        text-white
        p-10
        "
        >

            <h1
            className="
            text-4xl
            font-bold
            "
            >
                Machwana CMS Dashboard
            </h1>


            <div
            className="
            mt-10
            bg-white
            text-black
            rounded-xl
            p-8
            "
            >

                <p>
                    Welcome,
                    {" "}
                    {session.email}
                </p>


                <p
                className="
                mt-3
                text-gray-500
                "
                >
                    Role:
                    {" "}
                    {session.role}
                </p>


            </div>


        </main>

    );

}