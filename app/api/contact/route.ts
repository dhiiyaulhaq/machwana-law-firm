import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



function sanitize(value: string) {

  return value
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();

}




export async function POST(request: Request) {


  try {


    const body = await request.json();



    const {
      name,
      email,
      phone,
      subject,
      message,
      website,
    } = body;





    /*
      Honeypot Protection
      Reject bot submission
    */

    if (website) {


      return NextResponse.json(

        {

          success: false,

          message:
            "Spam detected",

        },


        {

          status: 400,

        }

      );


    }







    /*
      Basic Validation
    */


    if (

      !name ||

      !email ||

      !subject ||

      !message

    ) {


      return NextResponse.json(

        {

          success: false,

          message:
            "Please complete all required fields",

        },


        {

          status: 400,

        }

      );


    }








    if (

      !email.includes("@")

    ) {


      return NextResponse.json(

        {

          success: false,

          message:
            "Invalid email address",

        },


        {

          status: 400,

        }

      );


    }








    if (

      message.length > 5000

    ) {


      return NextResponse.json(

        {

          success: false,

          message:
            "Message is too long",

        },


        {

          status: 400,

        }

      );


    }








    const cleanName =
      sanitize(name);


    const cleanEmail =
      sanitize(email);


    const cleanPhone =
      sanitize(phone);


    const cleanSubject =
      sanitize(subject);


    const cleanMessage =
      sanitize(message);









    const transporter = nodemailer.createTransport({

      host:
        process.env.SMTP_HOST,


      port:
        Number(process.env.SMTP_PORT),


      secure:
        true,


      auth: {

        user:
          process.env.SMTP_USER,


        pass:
          process.env.SMTP_PASSWORD,

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
        cleanEmail,



      subject:
        `New Consultation Request | ${cleanSubject}`,



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


        <p>
          <strong>Name:</strong>
          ${cleanName}
        </p>


        <p>
          <strong>Email:</strong>
          ${cleanEmail}
        </p>


        <p>
          <strong>WhatsApp:</strong>
          ${cleanPhone}
        </p>


        <p>
          <strong>Subject:</strong>
          ${cleanSubject}
        </p>


        <p>
          <strong>Message:</strong>
        </p>


        <p>
          ${cleanMessage}
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
      Automatic reply
    */


    await transporter.sendMail({


      from: {

        name:
          "Machwana Law Office",


        address:
          "no-reply@machwanalawoffice.com",

      },



      to:
        cleanEmail,



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
          Dear ${cleanName},
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
          shortly.
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

          This is an automated confirmation email.

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