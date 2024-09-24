const grantTicket=(id)=>{
    fetch(`https://blackout-65jo.onrender.com/grantTicket/${id}`,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.success){
            alert("successful")
            window.location.reload()
        }
        else{
            alert("an error occured while trying to process your request")
        }
    })
}