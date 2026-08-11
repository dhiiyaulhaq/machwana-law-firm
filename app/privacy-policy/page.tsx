import Link from "next/link";


export default function PrivacyPolicy() {

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
          Privacy Policy
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
              Introduction
            </h2>


            <p className="mt-4">

              Machwana Law Office respects your privacy and
              is committed to protecting personal information
              submitted through this website.

            </p>

          </section>





          <section>

            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">
              Information We Collect
            </h2>


            <p className="mt-4">

              We may collect information including your name,
              email address, phone number, and details regarding
              your legal consultation request.

            </p>

          </section>





          <section>

            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">
              Use of Information
            </h2>


            <p className="mt-4">

              Information provided by users is used solely for
              responding to legal inquiries, consultation
              requests, and improving our services.

            </p>

          </section>





          <section>

            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">
              Data Security
            </h2>


            <p className="mt-4">

              Machwana Law Office takes reasonable measures
              to protect submitted information from unauthorized
              access.

            </p>

          </section>





          <section>

            <h2 className="
              text-2xl
              font-semibold
              text-slate-900
            ">
              Contact
            </h2>


            <p className="mt-4">

              For questions regarding this Privacy Policy,
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
            hover:bg-orange-600
          "

        >

          Back to Home

        </Link>



      </div>


    </main>

  );

}