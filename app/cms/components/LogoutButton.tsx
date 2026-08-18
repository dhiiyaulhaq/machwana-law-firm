"use client";

import { useState } from "react";



export default function LogoutButton() {


    const [
        isLoading,
        setIsLoading
    ] = useState(false);



    async function handleLogout() {


        if (isLoading) {

            return;

        }



        setIsLoading(
            true
        );



        try {


            const response =
                await fetch(
                    "/api/auth/logout",
                    {
                        method: "POST",
                    }
                );



            if (!response.ok) {

                throw new Error(
                    "Logout failed"
                );

            }



            window.location.href =
                "/cms/login";


        } catch (error) {


            console.error(
                "Logout error:",
                error
            );



            alert(
                "Failed to logout"
            );



            setIsLoading(
                false
            );

        }

    }



    return (

        <button

            type="button"

            onClick={
                handleLogout
            }

            disabled={
                isLoading
            }

            className="
                rounded-md
                bg-[#0B132B]
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-60
            "

        >

            {

                isLoading

                    ?

                    "Logging out..."

                    :

                    "Logout"

            }

        </button>

    );

}