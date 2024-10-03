const createMessageWithTemplate=(code,name,link)=>{

    return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
    }
    .email-header {
      background-color:#4b765a;
      color: #ffffff;
      padding: 10px 0;
      border-radius: 8px 8px 0 0;
    }
    .email-body {
      padding: 20px;
      color:"black";
    }
    .black{
      color:"black"
    }
    .email-footer {
      font-size: 12px;
      color: #888888;
      margin-top: 20px;
    }
    .button {
      background-color: #c49730;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Welcome to Our Party</h1>
    </div>
    <div class="email-body">
      <h2 class="black"> Hello Citizen  ${name}</h2>
      <p class="black"> Thank you for answering the call of the city, kindly find below your ticket ID</p>
  



<br/>


      <h3 class="black"><strong>${code}</strong></h3>
      <p class="black">
      Extreme Fun & Pleasure Awaits
      </p>
      <br/>
<p class="black">

Click the link below to stay updated!
</p>

      
      <a href=${link} class="button" style="color:white;">Join the party</a>
    </div>
    <div class="email-footer">
      <p class="black">&copy; 2024 Team Blackout. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

    
    
    
    `
}
export default createMessageWithTemplate
