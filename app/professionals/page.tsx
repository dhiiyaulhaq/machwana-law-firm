import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import ProfileCard from "../components/professionals/ProfileCard";

import PageHero from "../components/shared/PageHero";

import { professionals } from "../data/professionals";


export const metadata = {
  title: "Professionals | Machwana Law Office",
  description:
    "Meet the experienced legal professionals at Machwana Law Office. Our lawyers provide strategic legal counsel in corporate law, litigation, commercial matters, and business advisory.",
  keywords: [
    "Machwana Law Office",
    "Lawyer Indonesia",
    "Corporate Lawyer",
    "Legal Consultant",
    "Litigation Lawyer",
    "Business Law",
  ],
  openGraph: {
    title: "Professionals | Machwana Law Office",
    description:
      "Meet the legal professionals behind Machwana Law Office providing strategic and practical legal solutions.",
    type: "website",
  },
};



export default function ProfessionalsPage() {


  const schema = {

    "@context": "https://schema.org",

    "@type": "LegalService",

    name:
      "Machwana Law Office",

    description:
      "Machwana Law Office provides strategic legal counsel for corporations, entrepreneurs, investors, and individuals.",

    areaServed:
      "Indonesia",

    serviceType: [
      "Corporate Law",
      "Litigation",
      "Commercial Legal Advisory",
      "Business Legal Solutions",
    ],

    employee:
      professionals.map((professional) => ({

        "@type": "Person",

        name:
          professional.name,

        jobTitle:
          professional.position,

      })),

  };



  return (

    <>

      <Navbar />



      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />



      <PageHero

        eyebrow="Our Professionals"

        title={
          <>
            Experienced Legal Professionals
            <br />
            Dedicated to Excellence
          </>
        }

        description="Meet the professionals behind Machwana Law Office who provide strategic legal counsel and practical solutions for every client."

      />





      {/* Profile */}



      <Section background="white">


        <Container>


          <div className="space-y-24">


            {professionals.map((professional) => (


              <ProfileCard

                key={professional.name}

                professional={professional}

              />


            ))}


          </div>


        </Container>


      </Section>




      <Footer />


    </>

  );

}