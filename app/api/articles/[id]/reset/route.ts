import {
    NextResponse
} from "next/server";


import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";

import {
    getSession
} from "@/app/lib/auth";



export async function PATCH(
    req: Request,
    {
        params
    }: {
        params: Promise<{
            id: string;
        }>;
    }
) {


    try {


        const session =
            await getSession();



        if (!session) {


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
        await params;





        const article =
            await Article.findById(id);





        if (!article) {


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





        /*
            RESET ARTICLE STATUS

            Workflow:
            PENDING
            ↓
            APPROVED
            ↓
            RESET
            ↓
            PENDING kembali

            approvedBy dikosongkan
        */



        article.status =
            "PENDING";



        article.approvedBy =
            undefined;





        await article.save();






        return NextResponse.json(
            {

                message:
                "Article reset successfully",


                article

            }
        );





    } catch(error) {



        console.error(error);




        return NextResponse.json(
            {
                message:
                "Reset failed"
            },
            {
                status:500
            }
        );


    }


}