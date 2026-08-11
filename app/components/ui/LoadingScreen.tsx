"use client";


import Image from "next/image";
import { useEffect, useState } from "react";



export default function LoadingScreen() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const timer = setTimeout(() => {

      setLoading(false);

    }, 1400);



    return () => clearTimeout(timer);


  }, []);




  if (!loading) return null;



  return (

    <div

      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#070b18]
        animate-fadeOut
      "

    >


      <div

        className="
          flex
          flex-col
          items-center
          gap-6
        "

      >


        <Image

          src="/logo.png"

          alt="Machwana Law Office"

          width={260}

          height={120}

          priority

          className="
            object-contain
          "

        />



        <div

          className="
            h-[2px]
            w-32
            bg-orange-500
          "

        />



        <p

          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-white/80
          "

        >

          Machwana Law Office

        </p>



      </div>


    </div>

  );

}