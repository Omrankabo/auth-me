import connect from "@/dbConfig/dbConfig";
import { NextRequest ,NextResponse } from "next/server";
import User from '@/models/userModel'
import bcrypt from 'bcryptjs';
connect()

export async function POST(requset: NextRequest) {
    try {
        
        // getting data
        const reqBody = await requset.json();
        const {username,email,password} = reqBody;  
        
        const user = await User.findOne({email})
        // check if the user exist
        if (user) {
            return NextResponse.json({error:'User already exsits'},{status:400})
        }
        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // create a new user
        const newUser = new User({
            username:username,
            email:email,
            password: hashedPassword,
        })
        // save the user 
        const savedUser = await newUser.save()
        // return success message
        return( NextResponse.json({success: true},{status:200}) )
    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({error: error.message},{status:500})
        
    }
    
}