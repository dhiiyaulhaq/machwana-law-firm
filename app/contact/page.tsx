import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import PageHero from "../components/shared/PageHero";

import ContactForm from "./ContactForm";

import { contact } from "../data/contact";


export const metadata = {
  title: "Contact | Machwana Law Office",
  description:
    "Contact Machwana Law Office for strategic legal consultation, corporate advisory, litigation, and business legal solutions.",
};



export default function ContactPage() {


  return (

    <>

      <Navbar />



      <PageHero

        eyebrow="Contact"

        title={
          <>
            Let&apos;s Talk About
            <br />
            Your Legal Needs
          </>
        }

        description="Whether you need legal advice, corporate assistance, dispute resolution, or strategic representation, our team is ready to assist you."

      />





      {/* Contact Section */}


      <Section background="white">


        <Container>


          <div className="grid gap-16 lg:grid-cols-2">



            {/* Form */}


            <div>


              <h2 className="font-heading text-4xl font-bold text-slate-900">

                Send Us a Message

              </h2>



              <ContactForm />


            </div>





            {/* Contact Information */}


            <div>


              <div className="rounded-3xl bg-slate-900 p-10 shadow-xl lg:p-12">


                <h2 className="font-heading text-4xl font-bold text-white">

                  Contact Information

                </h2>



                <div className="mt-10 space-y-8">



                  <ContactItem

                    icon={<Mail size={24} />}

                    title="Email"

                    text={contact.email}

                  />



                  <ContactItem

                    icon={<Phone size={24} />}

                    title="Phone"

                    text={contact.phone}

                  />



                  <ContactItem

                    icon={<MapPin size={24} />}

                    title="Office"

                    text={
                      <>
                        {contact.address.street}
                        <br />
                        {contact.address.city}
                        <br />
                        {contact.address.province}
                      </>
                    }

                  />



                  <ContactItem

                    icon={<Clock size={24} />}

                    title="Office Hours"

                    text={
                      <>
                        Monday – Friday
                        <br />
                        {contact.officeHours.mondayFriday} WIB
                      </>
                    }

                  />



                </div>


              </div>


            </div>



          </div>


        </Container>


      </Section>





      {/* Google Maps */}


      <section className="bg-slate-50">


        <Container>


          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">


            <iframe

              src={contact.mapEmbed}

              width="100%"

              height="450"

              style={{
                border: 0,
              }}

              loading="lazy"

              allowFullScreen

              referrerPolicy="strict-origin-when-cross-origin"

              title={`${contact.company} Location`}

            />



          </div>


        </Container>


      </section>





      <Footer />


    </>

  );

}




function ContactItem({

  icon,

  title,

  text,

}: {

  icon: React.ReactNode;

  title: string;

  text: React.ReactNode;

}) {


  return (

    <div className="flex gap-5">


      <div className="mt-1 text-orange-400">

        {icon}

      </div>



      <div>


        <h3 className="font-semibold text-white">

          {title}

        </h3>



        <p className="mt-2 leading-7 text-slate-300">

          {text}

        </p>



      </div>



    </div>

  );

}