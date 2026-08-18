"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";



interface DeleteArticleButtonProps {

    id: string;

    role:
        | "ADMIN"
        | "MANAGING_PARTNER";

}



export default function DeleteArticleButton({

    id,

    role,

}: DeleteArticleButtonProps) {


    const router =
        useRouter();



    const [
        loading,
        setLoading
    ] =
        useState(false);



    /*
        UI PROTECTION

        Delete button is only shown
        for ADMIN.
    */

    if (
        role !==
        "ADMIN"
    ) {

        return null;

    }



    async function handleDelete() {


        const confirmed =
            window.confirm(
                "Are you sure you want to delete this article?"
            );



        if (!confirmed) {

            return;

        }



        try {


            setLoading(
                true
            );



            const response =
                await fetch(
                    `/api/articles/${id}/delete`,
                    {
                        method:
                            "DELETE",
                    }
                );



            const result =
                await response.json();



            if (
                !response.ok
            ) {

                throw new Error(
                    result.message ||
                    "Delete failed"
                );

            }



            window.alert(
                "Article deleted successfully"
            );



            router.push(
                "/cms/articles"
            );



            router.refresh();


        }
        catch (error) {


            console.error(
                "Delete article error:",
                error
            );



            window.alert(
                error instanceof Error
                    ? error.message
                    : "Delete failed"
            );


        }
        finally {


            setLoading(
                false
            );

        }

    }



    return (

        <button

            type="button"

            onClick={
                handleDelete
            }

            disabled={
                loading
            }

            className="
                bg-red-600
                text-white
                px-4
                py-2
                rounded
                text-sm
                hover:bg-red-700
                disabled:opacity-50
                disabled:cursor-not-allowed
            "

        >

            {

                loading

                    ? "Deleting..."

                    : "Delete Article"

            }

        </button>

    );

}