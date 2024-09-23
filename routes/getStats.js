import userModel from "../models/users.js";
import ticketModel from "../models/tickets.js"

const getStats=async(req,res,next)=>{
try{
    const allUsers=  await userModel.find()
    const allTickets=  await ticketModel.find().populate("user")

    return res.status(200).json({
        success:true,
        result:{
            allUsers,
            allTickets
        }
    })

}catch(err){
    console.log(err.message)
    return res.status(500).json({
        success:true,
        result:err.message
    })
}
}

export default getStats