import  ticketModel from "../models/tickets.js"

const verifyTicket=async(req,res,next)=>{
    try{
        const {number}= req.body
        const   ThisTicket= await ticketModel.findOne({number}).populate("user").exec()
        if(!ThisTicket){
            return res.status(404).json({success:false, result:"Invalid Ticket!"})
        }else{
            return res.status(200).json({success:true,result:ThisTicket})
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({success:false,result:err.message})

    }
}
export default verifyTicket