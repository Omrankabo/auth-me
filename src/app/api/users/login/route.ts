import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(request:NextRequest){
    try {
        // getting data from the front end
        const reqBody = await request.json()
        const {email,password} = reqBody;
        // check if the user is already exists
        const user = await User.findOne({email});
        if (!user) {
            return NextResponse.json({error:'This user does not exist'})
        }
        
        // check for the correct password
        const validPassword = await bcrypt.compare(password,user.password)
        if (!validPassword) {
            return(NextResponse.json({error:'incorrect passord'},{status:400}))
        }
        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            success: 'You made it to the end 💙'
        }
        // create toke
        const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1h'})
        // sign the jwt token to response
        const response = NextResponse.json({
            success:true,
            message:'Im so prode of you 🐱‍💻',
        },
        {
            status:200,
        })
        response.cookies.set('Token',token,{httpOnly:true})
        // return success message
        return (response)

    } catch (error:any) {
        const issue ={
            error:error.message
        }
        console.log(issue.error);
        return NextResponse.json(issue,{status:400})

        
    }
}