export default function ProfilePage({params}:any){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center  ">
        <h1>This is my profile page {params.id}</h1>
        </div>
    )
}