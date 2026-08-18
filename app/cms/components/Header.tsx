import { getSession } from "@/app/lib/auth";

import LogoutButton from "@/app/cms/components/LogoutButton";



export default async function Header() {


    const session =
        await getSession();



    return (

        <header className="
            h-20
            border-b
            flex
            items-center
            justify-between
            px-8
            bg-white
        ">


            <div>

                <h1 className="
                    font-semibold
                    text-xl
                    text-[#0B132B]
                ">

                    CMS Dashboard

                </h1>

            </div>



            <div className="
                flex
                items-center
                gap-5
            ">


                <div className="
                    text-sm
                    text-gray-600
                ">

                    {
                        session?.email
                    }

                </div>



                {

                    session && (

                        <LogoutButton />

                    )

                }


            </div>


        </header>

    );

}