import  createMessageWithTemplate from "./template.js"
import nodemailer from "nodemailer"
const sendMail=async(email,code,name)=>{
    const html= createMessageWithTemplate(code,name) 
    const transporter=nodemailer.createTransport({
   service:'gmail',
   auth:{
      user:/*'eventsnorwood@gmail.com'*/"blackoutnga@gmail.com",
       pass:/*'ldxybwgafkzoijwn'*/"uisg ziul mpoc zvlf",

   }})
   const options={
      from:'blackoutnga@gmail.com',
      to:email,
      subject:"Thanks for joining",
      html:html

   }
   transporter.sendMail(options,(err,info)=>{
      if(err){
         console.log(err);
         
         return;
      }else{
         console.log(info.response)
      }
   })
 }
 export  default sendMail