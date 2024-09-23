import  userModel from "../models/users.js"

const registerWithoutTicket=async(req,res,next)=>{
    try{
            const newUser= await  userModel.create(req.body)
            return res.status(200).json({succewss:true, result:"User created successfully"}

            )
    }catch(err){
        console.log(err.message)
     res.status(500).json({success:false, result:err.message})
    }
}
export default registerWithoutTicket