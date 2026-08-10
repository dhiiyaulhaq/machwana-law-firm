import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {

  try {


    const body = await request.json();


    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;





    const transporter = nodemailer.createTransport({

      host: process.env.SMTP_HOST,

      port: Number(process.env.SMTP_PORT),

      secure: true,

      auth: {

        user: process.env.SMTP_USER,

        pass: process.env.SMTP_PASSWORD,

      },

    });





    /*
      EMAIL 1
      Send inquiry to Machwana Law Office
    */


    await transporter.sendMail({

      from: {

        name:
          "Machwana Law Office",

        address:
          process.env.SMTP_FROM!,

      },


      to:
        process.env.SMTP_TO,


      replyTo:
        email,


      subject:
        `New Consultation Request | ${subject}`,


      html: `

      <div style="
        font-family: Arial, sans-serif;
        color:#1f2937;
        line-height:1.6;
      ">


        <h2>
          Machwana Law Office
        </h2>


        <h3>
          New Legal Consultation Request
        </h3>


        <hr />


        <h4>
          Client Information
        </h4>


        <p>
          <strong>Name:</strong>
          ${name}
        </p>


        <p>
          <strong>Email:</strong>
          ${email}
        </p>


        <p>
          <strong>WhatsApp:</strong>
          ${phone}
        </p>



        <h4>
          Consultation Details
        </h4>


        <p>
          <strong>Subject:</strong>
          ${subject}
        </p>


        <p>
          <strong>Message:</strong>
        </p>


        <p>
          ${message}
        </p>



        <hr />


        <p style="
          font-size:12px;
          color:#777;
        ">

          Submitted from:
          machwanalawoffice.com

        </p>


      </div>

      `,


    });







    /*
      EMAIL 2
      Automatic reply to client
    */


    await transporter.sendMail({


      from: {

        name:
          "Machwana Law Office",

        address:
          process.env.SMTP_FROM!,

      },


      to:
        email,



      subject:
        "Thank You for Contacting Machwana Law Office",



      html: `


      <div style="
        font-family: Arial, sans-serif;
        color:#1f2937;
        line-height:1.6;
      ">



        <h2>
          Machwana Law Office
        </h2>




        <p>
          Dear ${name},
        </p>



        <p>
          Thank you for contacting Machwana Law Office.
        </p>



        <p>
          We have received your legal consultation request
          and our team will review your inquiry.
        </p>



        <p>
          One of our legal professionals will contact you
          shortly for further assistance.
        </p>




        <br />



        <p>
          Best regards,
        </p>



        <p>

          <strong>
            Machwana Law Office
          </strong>

          <br />

          Advocates & Legal Consultants

        </p>




        <hr />



        <p style="
          font-size:12px;
          color:#777;
        ">

          This is an automated confirmation email
          from Machwana Law Office.

        </p>



      </div>


      `,


    });








    return NextResponse.json({

      success:
        true,

      message:
        "Email sent successfully",

    });








  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {

        success:
          false,

        message:
          "Failed to send email",

      },


      {

        status:
          500,

      }

    );


  }

}