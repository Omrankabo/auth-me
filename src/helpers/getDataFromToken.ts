import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export function getDataFromToken(request:NextRequest) {
    try {
        // getting token value
        const data = request.cookies.get('Token')?.value || '';
        
        // verify token
        const token:any = jwt.verify(data,process.env.TOKEN_SECRET!)
        console.log('got data from request ', token);
        return token.id;
    } catch (error:any) {
        console.log('im not going to get you, your token data');
        throw new Error(error.message)
    }
}