import { NextResponse } from "next/server";

import connectDB from "@/app/lib/mongodb";

import Article from "@/app/models/Article";



export async function GET() {

    try {

        await connectDB();



        const articles =
            await Article
                .find({
                    status: "APPROVED"
                })
                .sort({
                    createdAt: -1
                })
                .lean();



        return NextResponse.json(
            {
                articles
            },
            {
                status: 200
            }
        );



    } catch (error) {

        console.error(
            "PUBLIC ARTICLES ERROR:",
            error
        );



        return NextResponse.json(
            {
                message:
                "Failed to load public articles",

                articles: []
            },
            {
                status: 500
            }
        );

    }

}