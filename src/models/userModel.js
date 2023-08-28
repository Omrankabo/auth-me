import mongooes from 'mongoose'

const userSchema = new mongooes.Schema({
    username:{
        type: String,
        require:[true, "Please provide a username"],
        unique:true,
    },
    email:{
        type: String,
        require:[true,'Please provide an email'],
        unique:true,
    },
    password:{
        type: String,
        require:[true,"Please provide a password!"],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isVerfied:{
        type:Boolean,
        default:false,
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    varifyToken: String,
    verifyTokenExpiry:Date,
})

const User = mongooes.models.users || mongooes.model('users',userSchema)

export default User;