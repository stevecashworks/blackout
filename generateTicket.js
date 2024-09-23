import ticketModel from "./models/tickets.js";

const  generateTicket=async()=>{
    const allTickets= await ticketModel.find();
    const codes= allTickets.map(ticket=>ticket.number)
    let code= ""
    const chars="1234567890"
     while (code.length<6){
        code+= chars[Math.floor(Math.random()*chars.length)]
     }
     while(codes.includes(code)){
      code="";
      while (code.length<6){
        code+= chars[Math.floor(Math.random()*chars.length)]
     }
     
   }
   return code
}
export default generateTicket