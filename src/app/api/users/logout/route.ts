import { NextResponse } from "next/server";

export async function GET(){
    try {
        // create next response
        const response = NextResponse.json({
            message: 'Yes its working 😉',
            success: true,
        },{status:200})
        // empty token
        response.cookies.set('Token','',{httpOnly:true,expires: Date.now()})
        return response
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:400})
    }
}