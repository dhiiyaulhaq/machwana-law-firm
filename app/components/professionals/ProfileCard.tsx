import Image from "next/image";
import { Mail, CheckCircle2 } from "lucide-react";


type ProfileCardProps = {

  professional: {

    name: string;

    position: string;

    email: string;

    image: string;

    summary: string;

    education: string[];

    expertise: string[];

    experience: string;

  };

};



export default function ProfileCard({

  professional,

}: ProfileCardProps) {


  return (

    <article className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-start">



      {/* Image */}


      <div>


        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">


          <Image

            src={professional.image}

            alt={professional.name}

            width={500}

            height={700}

            sizes="(max-width:1024px) 100vw, 380px"

            className="
              aspect-[3/4]
              h-auto
              w-full
              object-cover
              transition
              duration-500
              hover:scale-105
            "

          />


        </div>


      </div>





      {/* Content */}


      <div>


        <h2
          className="
            font-heading
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            sm:text-4xl
            md:text-5xl
          "
        >

          {professional.name}


        </h2>





        <p className="mt-3 text-base font-semibold text-orange-500 sm:text-lg">

          {professional.position}

        </p>





        {/* Email */}


        <a

          href={`mailto:${professional.email}`}

          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-slate-600
            transition
            hover:text-orange-500
          "

        >

          <Mail

            size={18}

            className="text-orange-500"

          />


          {professional.email}


        </a>







        {/* Professional Summary */}



        <section className="mt-8 sm:mt-10">


          <h3
            className="
              font-heading
              text-xl
              font-bold
              text-slate-900
              sm:text-2xl
            "
          >

            Professional Summary

          </h3>



          <p
            className="
              mt-4
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >

            {professional.summary}

          </p>


        </section>







        {/* Academic Qualification */}



        <section className="mt-8 sm:mt-10">


          <h3
            className="
              font-heading
              text-xl
              font-bold
              text-slate-900
              sm:text-2xl
            "
          >

            Academic Qualification

          </h3>




          <ul className="mt-5 space-y-3">


            {professional.education.map((item) => (

              <li

                key={item}

                className="
                  flex
                  items-start
                  gap-3
                  text-slate-600
                "

              >


                <CheckCircle2

                  size={20}

                  strokeWidth={2.5}

                  className="
                    mt-1
                    shrink-0
                    text-orange-500
                  "

                />



                <span>

                  {item}

                </span>



              </li>


            ))}


          </ul>


        </section>









        {/* Professional Experience */}



        <section className="mt-8 sm:mt-10">


          <h3
            className="
              font-heading
              text-xl
              font-bold
              text-slate-900
              sm:text-2xl
            "
          >

            Professional Experience

          </h3>



          <p
            className="
              mt-4
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >

            {professional.experience}

          </p>


        </section>









        {/* Areas of Expertise */}



        <section className="mt-8 sm.mt-10">


          <h3
            className="
              font-heading
              text-xl
              font-bold
              text-slate-900
              sm:text-2xl
            "
          >

            Areas of Expertise

          </h3>




          <div className="mt-5 flex flex-wrap gap-3">


            {professional.expertise.map((item) => (

              <span

                key={item}

                className="
                  rounded-full
                  border
                  border-orange-200
                  bg-orange-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-orange-600
                "

              >

                {item}


              </span>


            ))}


          </div>


        </section>



      </div>


    </article>

  );

}