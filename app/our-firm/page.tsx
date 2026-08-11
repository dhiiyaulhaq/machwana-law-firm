import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";
import ContactCTA from "../components/home/ContactCTA";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

import PageHero from "../components/shared/PageHero";


export const metadata = {
  title: "Our Firm | Machwana Law Office",
  description:
    "Learn more about Machwana Law Office, our values, vision, and commitment to delivering strategic legal solutions with integrity and professionalism.",
};



const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every legal matter entrusted to us.",
    icon: ShieldCheck,
  },
  {
    title: "Professionalism",
    description:
      "We provide responsive, disciplined, and solution-oriented legal services.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Strategic Thinking",
    description:
      "Every recommendation is designed with both legal certainty and business objectives in mind.",
    icon: Scale,
  },
  {
    title: "Partnership",
    description:
      "We build long-term relationships founded on trust, transparency, and collaboration.",
    icon: Users,
  },
];



export default function OurFirmPage() {


  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Machwana Law Office",
    description:
      "Strategic legal counsel for businesses and individuals.",
    areaServed: "Indonesia",
    serviceType: [
      "Corporate Law",
      "Commercial Law",
      "Litigation",
      "Legal Advisory",
    ],
  };



  return (

    <>


      <Navbar />



      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />




      <PageHero
        eyebrow="Our Firm"
        title="Machwana Law Office"
        description="Providing strategic legal counsel with integrity, professionalism, and commercial insight for businesses and individuals."
      />





      <Section background="white">


        <Container>


          <div className="grid items-center gap-16 lg:grid-cols-2">


            <div>


              <SectionTitle
                eyebrow="Who We Are"
                title="Committed to Legal Excellence"
                description="Machwana Law Office is dedicated to providing practical legal advice that protects our clients&apos; interests while supporting their long-term objectives. We believe legal counsel should create value, reduce risk, and strengthen every business decision."
              />


            </div>




            <div>


              <div className="overflow-hidden rounded-3xl shadow-xl">


                <Image
                  src="/images/about-law-firm.jpg"
                  alt="Machwana Law Office"
                  width={700}
                  height={500}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />


              </div>


            </div>



          </div>


        </Container>


      </Section>






      <Section background="light">


        <Container>


          <div className="grid gap-8 lg:grid-cols-2">



            <Card>


              <h2 className="heading-md">
                Our Vision
              </h2>



              <p className="body mt-6">

                To be a leading strategic law firm in Indonesia, trusted for delivering 
                legal excellence, innovative solutions, and lasting value to our clients.

              </p>


            </Card>





            <Card>


              <h2 className="heading-md">
                Our Mission
              </h2>



              <ul className="body mt-6 list-disc space-y-3 pl-5">

                <li>
                  To provide sophisticated and commercially sound legal solutions.
                </li>

                <li>
                  To combine legal expertise with strategic thinking to achieve the best 
                  possible outcomes for our clients.
                </li>

                <li>
                  To protect our clients interests while creating opportunities for 
                  sustainable growth.
                </li>

                <li>
                  To maintain the highest standards of integrity, professionalism, 
                  confidentiality, and legal ethics.
                </li>

                <li>
                  To cultivate long-term partnerships built on trust, excellence, and mutual 
                  success.
                </li>

              </ul>


            </Card>



          </div>


        </Container>


      </Section>







      <Section background="white">


        <Container>



          <SectionTitle
            eyebrow="Core Values"
            title="The Principles That Guide Our Practice"
            description="Every legal service we provide is built upon values that define how we work with our clients."
            align="center"
          />




          <div className="mt-16 grid gap-8 md:grid-cols-2">



            {values.map((value)=>{


              const Icon = value.icon;



              return (


                <Card
                  key={value.title}
                  className="flex gap-5"
                >


                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100">


                    <Icon
                      size={28}
                      className="text-orange-500"
                    />


                  </div>





                  <div>


                    <h3 className="heading-md">
                      {value.title}
                    </h3>




                    <p className="body mt-3">
                      {value.description}
                    </p>



                  </div>



                </Card>


              );


            })}



          </div>




        </Container>


      </Section>






      <ContactCTA />


      <Footer />



    </>

  );

}