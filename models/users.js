import {model, Schema} from "mongoose"

const userSchema= Schema({
    fullName:{
        type:String,
        required:true,

    },
    userName:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    
    gender:{
        type:String,
        enum:["male", "female"]
    },
    ticket:{
        type:Schema.Types.ObjectId,
        ref:"tickets"
    }

    
},{timestamps:true})

const userModel= model("users",userSchema)
export default userModel