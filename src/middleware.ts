import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    try {
        // getting the path
        const path = request.nextUrl.pathname;
        // check for public path
        const isPublic = path === '/login' || path === '/signup';
        // extruct the token
        const token = request.cookies.get('Token')?.value || ''
        // redirect if there is public path and token
        if (isPublic && token) {
           return NextResponse.redirect(new URL('/',request.nextUrl))
        }
        if (!isPublic && !token) {
            return NextResponse.redirect(new URL('/login',request.nextUrl))
        }
    } catch (error:any) {
        console.log(error.message);
    }
} 
export const config = {
    matcher:[
        '/',
        '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
    ]
}