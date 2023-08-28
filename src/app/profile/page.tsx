"use client"
import { Toaster, toast } from "react-hot-toast"
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useState} from 'react'

export default function ProfilePage(){
    const router = useRouter()
    const [user,setUser] = useState(
        {
            username:'default',
            email:'default',
    })
    const logout = async function () {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successfuly',{icon:'👌'})
            router.push('/login')
        } catch (error:any) {
            toast.error(error.message)
        }
    }
    const getdata = async ()=> {
        
      try {
            const response:any = await axios.get('/api/users/me');
            const data = response.data
            setUser(data.data);
        } catch (error:any) {
            toast.error(error.message)
        }
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center  ">
        <h1>Profile page</h1>
        <hr />
        <p>This is my Profile page</p>
        <div className="flex items-center gap-6">
        <button className="mt-4 border-2  text-white rounded-lg hover:bg-slate-400 bg-slate-600 p-2" onClick={logout}>Logout</button>
        <button className="mt-4 border-2  text-white rounded-lg hover:bg-lime-400 bg-lime-600 p-2" onClick={getdata}>Get data</button>

        </div>
        <div className="flex flex-col gap-6 items-center mt-4">
            <h1>{user.username}</h1>
            <p>{user.email}</p>
        </div>
        <Toaster/>
        </div>
    )
}