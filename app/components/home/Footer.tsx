import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";

import { navigation } from "../../data/navigation";
import { services } from "../../data/services";
import { contact } from "../../data/contact";



const whatsappMessage =
  "Hi Machwana Law Office, I would like to schedule a legal consultation.";


const whatsappLink =
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;



const instagramLink =
  "https://www.instagram.com/machwana.lawoffice/";





export default function Footer() {


  return (


    <footer className="
      bg-slate-950
      text-white
    ">



      <Container>


        <div className="
          grid
          gap-12
          py-16
          md:grid-cols-2
          lg:grid-cols-4
        ">




          {/* COMPANY */}


          <div>


            <Image

              src="/logo.png"

              alt={contact.company}

              width={180}

              height={60}

              className="
                mb-6
                h-auto
              "

            />



            <p className="
              max-w-xs
              leading-8
              text-slate-400
            ">

              Machwana Law Office provides strategic legal
              counsel for corporations, entrepreneurs,
              investors, and individuals with professionalism,
              integrity, and commercial insight.

            </p>



          </div>








          {/* QUICK LINKS */}


          <div>


            <h3 className="
              mb-6
              font-heading
              text-xl
              text-white
            ">

              Quick Links

            </h3>



            <div className="
              space-y-4
            ">


              {navigation.map((item) => (


                <Link

                  key={item.name}

                  href={item.href}

                  className="
                    block
                    text-slate-400
                    transition
                    hover:text-orange-400
                  "

                >

                  {item.name}

                </Link>


              ))}


            </div>


          </div>









          {/* PRACTICE AREAS */}


          <div>


            <h3 className="
              mb-6
              font-heading
              text-xl
              text-white
            ">

              Practice Areas

            </h3>



            <div className="
              space-y-4
            ">


              {services.map((service) => (


                <Link

                  key={service.title}

                  href="/services"

                  className="
                    block
                    text-slate-400
                    transition
                    hover:text-orange-400
                  "

                >

                  {service.title}

                </Link>


              ))}


            </div>



          </div>









          {/* CONTACT */}


          <div>


            <h3 className="
              mb-6
              font-heading
              text-xl
              text-white
            ">

              Contact

            </h3>




            <div className="
              space-y-5
              text-slate-400
            ">




              {/* ADDRESS */}


              <div className="
                flex
                gap-4
              ">


                <MapPin className="
                  h-6
                  w-6
                  flex-shrink-0
                "/>



                <p className="
                  leading-7
                ">


                  {contact.address.street}

                  <br />

                  {contact.address.city}

                  <br />

                  {contact.address.province}


                </p>


              </div>







              {/* PHONE */}


              <div className="
                flex
                items-center
                gap-4
              ">


                <Phone className="
                  h-6
                  w-6
                  flex-shrink-0
                "/>


                <span>

                  {contact.phone}

                </span>


              </div>








              {/* EMAIL */}


              <div className="
                flex
                items-center
                gap-4
              ">


                <Mail className="
                  h-6
                  w-6
                  flex-shrink-0
                "/>


                <span>

                  {contact.email}

                </span>


              </div>









              {/* WHATSAPP */}


              <a

                href={whatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  flex
                  items-center
                  gap-4
                  transition
                  hover:text-orange-400
                "

              >


                <MessageCircle className="
                  h-6
                  w-6
                  flex-shrink-0
                "/>


                <span>

                  WhatsApp Consultation

                </span>


              </a>









              {/* INSTAGRAM */}


              <a

                href={instagramLink}

                target="_blank"

                rel="noopener noreferrer"

                aria-label="
                  Instagram Machwana Law Office
                "

                className="
                  flex
                  items-center
                  gap-4
                  transition
                  hover:text-orange-400
                "

              >


                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="
                    h-6
                    w-6
                    flex-shrink-0
                  "
                  aria-hidden="true"
                >

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                  />

                  <circle
                    cx="17.3"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />

                </svg>


                <span>

                  Instagram Machwana Law Office

                </span>


              </a>




            </div>



          </div>





        </div>









        {/* LEGAL LINKS */}



        <div className="
          border-t
          border-slate-800
          py-6
        ">


          <div className="
            flex
            flex-wrap
            gap-6
            text-sm
            text-slate-400
          ">


            <Link

              href="/privacy-policy"

              className="
                transition
                hover:text-orange-400
              "

            >

              Privacy Policy

            </Link>




            <Link

              href="/terms"

              className="
                transition
                hover:text-orange-400
              "

            >

              Terms & Conditions

            </Link>


          </div>



        </div>









        {/* COPYRIGHT */}



        <div className="
          border-t
          border-slate-800
          py-8
          text-sm
          text-slate-500
        ">



          <p>

            © {new Date().getFullYear()} {contact.company}.
            All Rights Reserved.

          </p>



        </div>





      </Container>


    </footer>


  );


}