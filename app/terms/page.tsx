import Link from "next/link";


export default function Terms() {


  return (

    <main className="
      bg-white
      py-24
    ">


      <div className="
        mx-auto
        max-w-4xl
        px-6
        lg:px-8
      ">


        <p className="
          mb-6
          text-sm
          font-semibold
          uppercase
          tracking-[0.45em]
          text-orange-500
        ">

          Legal Information

        </p>





        <h1 className="
          font-heading
          text-5xl
          font-bold
          text-slate-900
        ">

          Terms & Conditions

        </h1>







        <div className="
          mt-10
          space-y-8
          text-lg
          leading-8
          text-slate-600
        ">





          <section>


            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">

              Website Use

            </h2>



            <p className="mt-4">

              This website is provided for general
              informational purposes regarding Machwana
              Law Office and its legal services.

              Information available on this website
              does not constitute legal advice.

            </p>


          </section>








          <section>


            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">

              No Attorney-Client Relationship

            </h2>



            <p className="mt-4">

              Contacting Machwana Law Office through
              this website or submitting an inquiry does
              not automatically create an attorney-client
              relationship.

              Such relationship is established only after
              formal engagement and confirmation by
              Machwana Law Office.

            </p>


          </section>








          <section>


            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">

              Legal Services

            </h2>



            <p className="mt-4">

              Machwana Law Office provides legal services
              based on applicable laws, professional
              standards, and the specific circumstances
              of each client.

            </p>


          </section>








          <section>


            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">

              Limitation of Liability

            </h2>



            <p className="mt-4">

              While Machwana Law Office strives to ensure
              the accuracy of information provided on this
              website, we do not guarantee that all
              information is complete, current, or applicable
              to every situation.

            </p>


          </section>








          <section>


            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">

              Contact Information

            </h2>



            <p className="mt-4">

              For further information regarding these terms,
              please contact:

              <br />

              info@machwanalawoffice.com

            </p>


          </section>





        </div>







        <Link

          href="/"

          className="
            mt-12
            inline-flex
            rounded-full
            bg-orange-500
            px-7
            py-3
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "

        >

          Back to Home

        </Link>





      </div>


    </main>

  );


}