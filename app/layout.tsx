import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

import { legalServiceSchema } from "./schema";


const headingFont = Cormorant_Garamond({

  subsets: ["latin"],

  weight: [
    "400",
    "500",
    "600",
    "700",
  ],

  variable: "--font-heading",

  display: "swap",

});



const bodyFont = Inter({

  subsets: ["latin"],

  variable: "--font-body",

  display: "swap",

});





export const metadata: Metadata = {


  metadataBase: new URL(
    "https://machwanalawoffice.com"
  ),



  title: {

    default:
      "Machwana Law Office | Strategic Legal Solutions",

    template:
      "%s | Machwana Law Office",

  },



  description:

    "Machwana Law Office provides strategic legal counsel in corporate law, litigation, bankruptcy, mergers and acquisitions, arbitration, competition law, and commercial matters in Indonesia.",




  keywords: [

    "Machwana Law Office",

    "Machwana Law Firm",

    "Law Firm Indonesia",

    "Corporate Lawyer Indonesia",

    "Business Lawyer",

    "Litigation Lawyer",

    "Bankruptcy Lawyer",

    "Merger Acquisition Lawyer",

    "Arbitration Lawyer",

    "Competition Law",

    "Commercial Law",

  ],




  authors: [

    {

      name:
        "Machwana Law Office",

      url:
        "https://machwanalawoffice.com",

    },

  ],



  creator:

    "Machwana Law Office",



  publisher:

    "Machwana Law Office",





  alternates: {

    canonical:

      "https://machwanalawoffice.com",

  },





  openGraph: {


    type:
      "website",


    locale:
      "id_ID",


    url:
      "https://machwanalawoffice.com",


    siteName:
      "Machwana Law Office",



    title:

      "Machwana Law Office | Strategic Legal Solutions",



    description:

      "Trusted legal counsel providing corporate advisory, dispute resolution, restructuring, arbitration, and business legal solutions.",



    images:

      [

        {

          url:
            "/og-image.jpg",

          width:
            1200,

          height:
            630,

          alt:
            "Machwana Law Office",

        },

      ],


  },






  twitter: {


    card:

      "summary_large_image",



    title:

      "Machwana Law Office | Strategic Legal Solutions",



    description:

      "Professional legal counsel for businesses and individuals throughout Indonesia.",



    images:

      [

        "/og-image.jpg",

      ],


  },






  robots: {


    index:

      true,


    follow:

      true,



    googleBot:

      {

        index:

          true,


        follow:

          true,

      },

  },






  icons: {


    icon:

      "/favicon.ico",



    shortcut:

      "/favicon.ico",



    apple:

      "/apple-touch-icon.png",


  },







  category:

    "Legal Services",






  formatDetection:

    {

      telephone:

        false,

    },


};







export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {



  return (


    <html

      lang="id"

      className={

        `${headingFont.variable} ${bodyFont.variable}`

      }

    >



      <body>



        <script

          type="application/ld+json"

          suppressHydrationWarning

          dangerouslySetInnerHTML={{

            __html:

              JSON.stringify(

                legalServiceSchema

              ),

          }}

        />



        {children}



      </body>



    </html>


  );


}