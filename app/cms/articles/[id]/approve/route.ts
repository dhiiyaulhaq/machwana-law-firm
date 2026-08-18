import {
  NextRequest,
  NextResponse
} from "next/server";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
  getSession
} from "@/app/lib/auth";



export async function PATCH(
  request: NextRequest,
  context: {
    params: Promise<{
      id:string;
    }>
  }
){


  try {


    console.log(
      "APPROVE API HIT"
    );



    const session =
      await getSession();



    console.log(
      "SESSION:",
      session
    );



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



    const {
      id
    } =
    await context.params;



    console.log(
      "ARTICLE ID:",
      id
    );




    const article =
      await Article.findById(
        id
      );



    console.log(
      "ARTICLE:",
      article
    );




    if(!article){


      return NextResponse.json(
        {
          message:
          "Article not found"
        },
        {
          status:404
        }
      );


    }




    article.status =
      "APPROVED";



    article.approvedBy =
      session.email;



    await article.save();



    return NextResponse.json(
      {
        message:
        "Article approved",

        article
      },
      {
        status:200
      }
    );



  } catch(error){



    console.error(
      "APPROVE ERROR:",
      error
    );



    return NextResponse.json(
      {
        message:
        "Failed approving article",

        error:
        String(error)
      },
      {
        status:500
      }
    );


  }


}