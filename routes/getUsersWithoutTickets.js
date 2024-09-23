import userModel from "../models/users.js";

const getUsersWithoutTickets=async(req, res, next)=>{
    try {
        const  allUsers=  await userModel.find()
        const  usersWithoutTickets= allUsers.filter(user=>!user.ticket)
        return res.status(200).json({success:true, result:usersWithoutTickets})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false, result:error.message})
    }

}
export default getUsersWithoutTickets