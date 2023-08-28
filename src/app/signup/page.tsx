"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { toast ,Toaster} from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter()
    const [user,setUser] = useState({
        username:'',
        email:'',
        password:'',
    })
    const [loading,setLoading] = useState(true)
    const [buttonDisalbled,setButtonDisalbled] = useState(true)
    
    const onSignup = async ()=>{
        try {
            setLoading(true)
            
            const response = await axios.post('/api/users/signup',user)

            console.log(response.data);
            
            toast.success('Signup successfuly',{
                icon:'❤'
            })
            router.push('/login')

        } catch (error:any) {
            toast.error(error.message)
        }
    }
    useEffect(()=>{

        if (user.email.length>0 && user.password.length>0 && user.username.length>0) {
            setButtonDisalbled(false)
        }else{
            setButtonDisalbled(true)
        }
    },[user])

    return(
        <div className="flex items-center flex-col justify-center min-h-screen gap-1 ">
            <h1 className="font-bold text-xl uppercase mb-4 ">{loading? "Processing": "Signing up"}</h1>
            <hr />
            <div className="flex flex-col items-start mb-4 ">
                <label htmlFor="username">Username</label>
                <input 
                id="username"
                type="text"
                required
                value={user.username}
                placeholder="username"
                onChange={(e)=>{setUser({...user,username:e.target.value})}}
                className="p-2 focus:outline-none rounded-lg focus:border-2 focus:border-gray-400 "
                 />
            </div>
            <div className="flex flex-col items-start mb-4 ">
                <label htmlFor="email">Email</label>
                <input 
                id="email"
                type="email"
                required
                value={user.email}
                placeholder="email"
                onChange={(e)=>{setUser({...user,email:e.target.value})}}
                className="p-2 focus:outline-none rounded-lg focus:border-2 focus:border-gray-400 "
                 />
            </div>
            <div className="flex flex-col items-start mb-4 ">
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                required
                id="password"
                value={user.password}
                placeholder="password"
                onChange={(e)=>{setUser({...user,password:e.target.value})}}
                className="p-2 focus:outline-none rounded-lg focus:border-2 focus:border-gray-400 "
                 />
            </div>
            <button onClick={onSignup} className="p-2 border rounded-lg border-2 border-black mb-4">{buttonDisalbled? 'No signup yet': 'Signup'} </button>
            <Link href={'/login'}>Visit login page</Link>
            <Toaster
            reverseOrder={true}
            />

        </div>
    )
}