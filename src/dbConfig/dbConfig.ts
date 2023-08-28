import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async function(){
    
    try{
        mongoose.connect('mongodb+srv://ok:manoverthemoon14@cluster0.x9cl0wp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    
        const connection = mongoose.connection;
        connection.on('connect',()=>{
            console.log('Mongoose connected successfully');
            
        });
        connection.on('error',()=>{
            console.log('Mongoose failed to connect');
            
        });
    }catch(error:any){
        console.log(error.message,'Yeah something went wrong');
        
    }

};


export default connect;
