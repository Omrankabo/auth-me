import mongoose from "mongoose";

const connect = async function(){
    
    try{
        mongoose.connect(process.env.MONGO_URI!)
    
        const connection = mongoose.connection;
        connection.on('connect',()=>{
            console.log('mogodb connected successfuly');
            
        })
        connection.on('error',()=>{
            console.log('mogodb failed to connect');
            
        })
    }catch(error:any){
        console.log(error.message,'Yeah something went wrong');
        
    }

}


export default connect;