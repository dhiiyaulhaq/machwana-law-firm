import type { ReactNode } from "react";

import Container from "../ui/Container";


type PageHeroProps = {

  eyebrow: string;

  title: ReactNode;

  description: string;

  background?: string;

};



export default function PageHero({

  eyebrow,

  title,

  description,

  background = "/images/hero-building.jpg",

}: PageHeroProps) {


  return (

    <section
      className="
        relative
        flex
        min-h-[420px]
        items-center
        overflow-hidden
        pt-24
        md:min-h-[520px]
        lg:min-h-[620px]
      "
      style={{
        backgroundImage:
          `linear-gradient(rgba(15,23,42,.82), rgba(15,23,42,.82)), url('${background}')`,

        backgroundSize:
          "cover",

        backgroundPosition:
          "center",
      }}
    >


      <Container>


        <div className="max-w-3xl">


          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">

            {eyebrow}

          </p>



          <h1
            className="
              font-heading
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >

            {title}

          </h1>



          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">

            {description}

          </p>



        </div>


      </Container>


    </section>

  );

}