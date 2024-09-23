import {Schema, model} from "mongoose";
const ticketSchema=  Schema({
    number:{
        type:String,
        unque:true,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    plan:{
        type:String,
        enum:["allAccess","exclusive","special"],
        required:true
    }
},{timestamps:true})

const  ticketModel= model("tickets", ticketSchema)
export default ticketModel