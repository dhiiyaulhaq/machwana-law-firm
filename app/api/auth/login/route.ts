import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { createSession } from "@/app/lib/auth";


export async function POST(
    request: NextRequest
){

    try {

        await connectDB();


        const body =
            await request.json();


        const {
            email,
            password
        } = body;



        if(
            !email ||
            !password
        ){

            return NextResponse.json(
                {
                    message:
                    "Email and password required"
                },
                {
                    status:400
                }
            );

        }



        const user =
            await User.findOne({
                email
            });



        if(!user){

            return NextResponse.json(
                {
                    message:
                    "Invalid credentials"
                },
                {
                    status:401
                }
            );

        }



        const validPassword =
            await bcrypt.compare(
                password,
                user.password
            );



        if(!validPassword){

            return NextResponse.json(
                {
                    message:
                    "Invalid credentials"
                },
                {
                    status:401
                }
            );

        }



        if(!user.approved){

            return NextResponse.json(
                {
                    message:
                    "Account not approved"
                },
                {
                    status:403
                }
            );

        }



        // CREATE SESSION COOKIE
        await createSession({

            id:
            user._id.toString(),

            email:
            user.email,

            role:
            user.role

        });



        return NextResponse.json({

            message:
            "Login success",

            role:
            user.role

        });



    }
    catch(error){

        console.error(error);


        return NextResponse.json(
            {
                message:
                "Server error"
            },
            {
                status:500
            }
        );

    }

}