import express from "express"
import { config } from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import generateTicket from "./generateTicket.js"
import register from "./routes/register.js"
import renderTicket from "./routes/renderTicket.js"
import registerWithoutTicket from "./routes/registerWithoutTicket.js"
import verifyTicket from "./routes/verifyTicket.js"
import getUsersWithoutTickets from "./routes/getUsersWithoutTickets.js"
import getStats from "./routes/getStats.js"
config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"
const server = express()
server.use(express.json())
server.use(cors())
server.post("/register",register)
server.post("/grantTicket/:id",renderTicket)
server.post("/registerwithoutticket",registerWithoutTicket)
server.post("/tickets/verify",verifyTicket)
server.get("/stats", getStats)
server.get("/withnotickets",getUsersWithoutTickets)


server.get((req,res,next)=>{
    return res.status(200).json({success:true, result:"Api is working"})
})



const port = process.env.port

const start= async()=>{
    try {
        await mongoose.connect(process.env.mongo_uri) 
        console.log("connected to database") 
        server.listen(port,()=>{
        
            console.log(`server is listening on port ${port}`)
        })
        
    } catch (error) {
        console.log(error.message)
    }
}
start()