import { ArrowRight, Mail, Phone } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";

import { contact } from "../../data/contact";


const whatsappMessage =
  "Hi Machwana Law Office, I would like to schedule a legal consultation.";


const whatsappLink =
  `${contact.whatsappLink}?text=${encodeURIComponent(
    whatsappMessage
  )}`;




export default function ContactCTA() {

  return (

    <Section background="dark">


      <Container>


        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-900
            p-10
            shadow-2xl
            lg:p-16
          "
        >



          <div className="mx-auto max-w-3xl text-center">



            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-orange-300
              "
            >

              Let&apos;s Talk

            </p>





            <h2
              className="
                mt-6
                font-heading
                text-4xl
                font-bold
                leading-tight
                text-white
                lg:text-5xl
              "
            >

              Need Trusted Legal Counsel?

            </h2>





            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-300
              "
            >

              Schedule a confidential consultation with
              Machwana Law Office. Our team is ready to
              provide strategic legal solutions with
              professionalism and integrity.

            </p>





            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >



              {/* WhatsApp Consultation */}


              <a

                href={whatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="btn-primary"

              >

                Schedule Consultation


                <ArrowRight size={18} />


              </a>







              {/* Email */}



              <a

                href={`mailto:${contact.email}`}

                className="btn-secondary"

              >

                <Mail size={18} />

                Email Us


              </a>



            </div>







            <div
              className="
                mt-12
                grid
                gap-6
                border-t
                border-white/10
                pt-8
                md:grid-cols-2
              "
            >



              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >


                <Phone

                  size={20}

                  className="text-orange-400"

                />



                <span className="text-slate-300">

                  {contact.phone}

                </span>


              </div>







              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >


                <Mail

                  size={20}

                  className="text-orange-400"

                />



                <span className="text-slate-300">

                  {contact.email}

                </span>


              </div>



            </div>





          </div>




        </div>




      </Container>




    </Section>

  );

}