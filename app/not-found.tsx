import Link from "next/link";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/home/Footer";

import Container from "./components/ui/Container";


export default function NotFound() {

  return (

    <>

      <Navbar />


      <main className="flex min-h-screen items-center bg-slate-950">

        <Container>


          <div className="mx-auto max-w-3xl text-center">


            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Error 404
            </p>



            <h1 className="mt-6 font-heading text-6xl font-bold text-white md:text-8xl">

              Page Not Found

            </h1>



            <p className="mt-8 text-lg leading-8 text-slate-300">

              Sorry, the page you&apos;re looking for doesn&apos;t exist
              or may have been moved.

            </p>



            <Link
              href="/"
              className="btn-primary mt-10 inline-flex"
            >

              Back To Homepage

            </Link>



          </div>


        </Container>


      </main>



      <Footer />


    </>

  );

}