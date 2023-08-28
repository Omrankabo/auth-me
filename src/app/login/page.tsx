"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { toast ,Toaster} from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const [user,setUser] = useState({
        email:'',
        password:'',
    })
    const [loading,setLoading] = useState(true)
    const [buttonDisalbled,setButtonDisalbled] = useState(true)
    
    const onSignup = async ()=>{
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login',user)
            console.log(response.data);
            
            toast.success('Login successfuly',{
                icon:'💙'
            })
            router.push('/profile')
        } catch (error:any) {
            toast.error(error.message)
        }
    }
    useEffect(()=>{

        if (user.email.length>0 && user.password.length>0 ) {
            setButtonDisalbled(false)
        }else{
            setButtonDisalbled(true)
        }
    },[user])

    return(
        <div className="flex items-center flex-col justify-center min-h-screen gap-1 ">
            <h1 className="font-bold text-xl uppercase mb-4 ">{loading? "Processing": "Login"}</h1>
            <hr />
            
            <div className="flex flex-col items-start mb-4 ">
                <label htmlFor="email">Email</label>
                <input 
                id="email"
                type="email"
                required
                value={user.email}
                placeholder="email"
                onChange={(e)=>{setUser({...user,email:e.target.value})}}
                className="p-2 border-2 focus:outline-none rounded-lg focus:border-gray-400 text-black"
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
                className="p-2 border-2 focus:outline-none rounded-lg focus:border-gray-400 text-black "
                 />
            </div>
            <button onClick={onSignup} className="p-2 border rounded-lg border border-black mb-4">{buttonDisalbled? 'No login yet': 'Login'} </button>
            <Link href={'/signup'}>Visit signup page</Link>
            <Toaster
            reverseOrder={true}
            />

        </div>
    )
}