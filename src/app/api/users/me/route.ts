import  {getDataFromToken} from "@/helpers/getDataFromToken";
import connect from '@/dbConfig/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

// connect to data base 
connect()

export async function GET(request:NextRequest) {
    try {
        // get the id 
        const id = getDataFromToken(request)
        console.log(id);
        
        const user = await User.findById(id).select('-password -_v -isAdmin ')

        return (NextResponse.json({
            message: 'You made it and extacuted user informations',
            data: user,
        },{status:200}))

    } catch (error:any) {
        console.log(error.message);
        
    }
}