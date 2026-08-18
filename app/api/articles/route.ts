import { NextResponse } from "next/server";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import { getSession } from "@/app/lib/auth";




export async function POST(
request: Request
) {


  try {


    const session =
      await getSession();



    if(!session){

      return NextResponse.json(

        {
          message:
          "Unauthorized"
        },

        {
          status:401
        }

      );

    }





    await connectDB();





    const body =
      await request.json();





    const {

      title,

      slug,

      excerpt,

      content,

      image

    } = body;







    const article =
      await Article.create({

        title,

        slug,

        excerpt,

        content,

        image,

        author:
        session.email,

        status:
        "PENDING"

      });







    return NextResponse.json(

      {

        message:
        "Article created successfully",

        article

      },

      {

        status:201

      }

    );





  } catch(error){



    console.error(error);



    return NextResponse.json(

      {

        message:
        "Failed creating article"

      },

      {

        status:500

      }

    );


  }


}