"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";


interface ApproveButtonProps {

  id: string;

}



export default function ApproveButton({
  id,
}: ApproveButtonProps) {


  const router =
    useRouter();


  const [
    loading,
    setLoading
  ] =
    useState(false);



  async function handleApprove(){


    setLoading(true);



    try {


      const response =
        await fetch(
          `/api/articles/${id}/approve`,
          {
            method:"PATCH",
            headers:{
              "Content-Type":
                "application/json",
            },
          }
        );



      const result =
        await response.json();



      if(!response.ok){

        throw new Error(
          result.message ||
          "Approve failed"
        );

      }



      alert(
        "Article approved successfully"
      );



      router.push(
        "/cms/articles"
      );


      router.refresh();



    } catch(error){


      console.error(
        "Approve error:",
        error
      );



      alert(
        "Failed approving article"
      );



    } finally {


      setLoading(false);


    }

  }





  return (

    <button

      onClick={
        handleApprove
      }

      disabled={
        loading
      }

      className="
        bg-[#0B132B]
        text-white
        px-4
        py-2
        rounded
        hover:opacity-90
        disabled:opacity-50
      "

    >

      {
        loading
        ?
        "Approving..."
        :
        "Approve Article"
      }


    </button>

  );


}