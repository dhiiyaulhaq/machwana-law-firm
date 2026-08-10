import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";
import ContactCTA from "../components/home/ContactCTA";

import PageHero from "../components/shared/PageHero";

import {
  Building2,
  Landmark,
  Factory,
  Cpu,
  HardHat,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";


const industries = [
  {
    title: "Corporate & Commercial",
    description:
      "Supporting corporations in governance, contracts, compliance, and commercial transactions.",
    icon: Building2,
  },
  {
    title: "Financial Services",
    description:
      "Providing legal advice to financial institutions, investors, and financing transactions.",
    icon: Landmark,
  },
  {
    title: "Technology",
    description:
      "Advising technology companies on business growth, intellectual property, and regulatory matters.",
    icon: Cpu,
  },
  {
    title: "Manufacturing",
    description:
      "Legal solutions for operational, commercial, employment, and supply chain matters.",
    icon: Factory,
  },
  {
    title: "Real Estate",
    description:
      "Supporting property development, acquisitions, leasing, and construction projects.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Energy & Infrastructure",
    description:
      "Advising energy, mining, and infrastructure businesses on complex legal matters.",
    icon: HardHat,
  },
];



export const metadata = {
  title: "Clients | Machwana Law Office",
  description:
    "Machwana Law Office provides strategic legal solutions for businesses across various industries.",
};



export default function ClientsPage() {


  return (

    <>

      <Navbar />



      <PageHero

        eyebrow="Our Clients"

        title={
          <>
            Trusted Across
            <br />
            Diverse Industries
          </>
        }

        description="Machwana Law Office provides strategic legal services for businesses operating across different industries with professionalism, confidentiality, and commercial understanding."

      />





      {/* Industries */}


      <Section background="white">


        <Container>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            {industries.map((industry) => {


              const Icon = industry.icon;



              return (

                <Card
                  key={industry.title}
                  className="flex h-full flex-col"
                >


                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">


                    <Icon

                      size={30}

                      className="text-orange-500"

                    />


                  </div>




                  <h2 className="heading-md mt-8">

                    {industry.title}

                  </h2>




                  <p className="body mt-5">

                    {industry.description}

                  </p>



                </Card>

              );


            })}


          </div>


        </Container>


      </Section>





      {/* Confidentiality */}



      <Section background="light">


        <Container>


          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-center lg:p-16">


            <ShieldCheck

              size={56}

              className="mx-auto text-orange-400"

            />



            <h2 className="mt-8 font-heading text-4xl font-bold text-white lg:text-5xl">

              Client Confidentiality

            </h2>




            <p className="mt-6 text-lg leading-8 text-slate-300">

              We respect the confidentiality of every client
              relationship and maintain the highest standards of
              professional responsibility.

            </p>



          </div>


        </Container>


      </Section>





      {/* Partnership */}



      <Section background="white">


        <Container>


          <div className="mx-auto max-w-4xl text-center">


            <Users

              size={56}

              className="mx-auto text-orange-500"

            />



            <h2 className="mt-8 font-heading text-4xl font-bold text-slate-900 lg:text-5xl">

              Building Long-Term Partnerships

            </h2>




            <p className="mt-6 text-lg leading-8 text-slate-600">

              Our goal is not only to solve legal challenges,
              but also to become a trusted legal partner that
              supports sustainable business growth.

            </p>



          </div>


        </Container>


      </Section>





      <ContactCTA />



      <Footer />


    </>

  );

}