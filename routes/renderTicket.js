import userModel from "../models/users.js";
import ticketModel from "../models/tickets.js";
import generateTicket from "../generateTicket.js";
import sendMail from "../sendMail.js";

const renderTicket= async(req,res,next)=>{
try{
    const plan= req.body.plan||"allAccess"
    const {id}= req.params;
    const number= await generateTicket()
    const thisUser= await userModel.findById(id)
    const newTicket= await ticketModel.create({user:thisUser._id,plan,number})
    await sendMail(thisUser.email,number, thisUser.userName)
    const  updatedUser= await  userModel.findByIdAndUpdate(id,{$set:{ticket:newTicket._id}})
    
    return res.status(200).json({success:true, result:"done"})

}catch(err){
return res.status(500).json({success:false, result:err.message})
}
}

export default renderTicket
