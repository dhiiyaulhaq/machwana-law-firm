"use client";


export default function Error({

  reset,

}: {

  reset: () => void;

}) {


  return (

    <main className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-white
      px-6
    ">


      <div className="
        max-w-xl
        text-center
      ">


        <p className="
          mb-6
          text-sm
          font-semibold
          uppercase
          tracking-[0.45em]
          text-orange-500
        ">

          Machwana Law Office

        </p>





        <h1 className="
          font-heading
          text-5xl
          font-bold
          text-slate-900
        ">

          Something Went Wrong

        </h1>





        <p className="
          mt-6
          text-lg
          leading-8
          text-slate-600
        ">

          We are unable to process your request at the moment.
          Please try again.

        </p>





        <button

          onClick={() => reset()}

          className="
            mt-10
            rounded-full
            bg-orange-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "

        >

          Try Again

        </button>




      </div>


    </main>

  );


}