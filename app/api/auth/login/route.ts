import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

import { connectDB } from "@/app/lib/mongodb";

import User from "@/app/models/User";

import { createSession } from "@/app/lib/auth";




export async function POST(
  request: Request
) {


  try {


    await connectDB();



    const body =
      await request.json();



    const {
      email,
      password,
    } = body;




    if (
      !email ||
      !password
    ) {


      return NextResponse.json(
        {
          message:
            "Email and password required",
        },
        {
          status:
            400,
        }
      );


    }





    const user =
      await User.findOne({
        email,
      });





    if (!user) {


      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status:
            401,
        }
      );


    }





    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );





    if (!passwordMatch) {


      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status:
            401,
        }
      );


    }






    if (!user.approved) {


      return NextResponse.json(
        {
          message:
            "Account not approved",
        },
        {
          status:
            403,
        }
      );


    }






    const token =
      await createSession({

        id:
          user._id.toString(),

        email:
          user.email,

        role:
          user.role,

      });







    const response =
      NextResponse.json(
        {
          message:
            "Login success",

          role:
            user.role,

        }
      );






    response.cookies.set(
      "machwana_session",
      token,
      {

        httpOnly:
          true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite:
          "lax",

        maxAge:
          60 * 60 * 24 * 7,

        path:
          "/",

      }
    );





    return response;





  } catch(error) {


    console.error(
      error
    );


    return NextResponse.json(
      {
        message:
          "Server error",
      },
      {
        status:
          500,
      }
    );


  }


}