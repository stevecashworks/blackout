import generateTicket from "../generateTicket.js"
import ticketModel from "../models/tickets.js"
import  userModel from "../models/users.js"
import sendMail from "../sendMail.js"

const register= async(req,res,next)=>{
const plan= req.body.package
const link= plan==="exclusive"?"https://chat.whatsapp.com/BgbY0xZFdx97BFZobIlgfZ":"https://chat.whatsapp.com/I44ChddVgqsLKtGv9wCf4F"
    try {
    const newUser= await userModel.create(req.body)
    const number= await generateTicket()
    const  newTicket= await ticketModel.create({number,user:newUser._id, plan})
    const updatedUser= await userModel.findByIdAndUpdate(newUser._id,{$set:{ticket:newTicket._id}})
    sendMail(newUser.email,number,newUser.userName,link )
    return res.status(200).json({
        success:true,
        result:`Successful`
    })
    

    
} catch (error) {
    return res.status(500).json({
        success:false,
        result: error.message
    })
}
}


export default register 
