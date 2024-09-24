let reqBody;
const sendRequest=(url, method, data)=>{
const options= method==="get"?null:{
    method,
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}

fetch(url,options).then(res=>res.json()).then(data=>{
    alert(data.result);
    window.location.assign("http://presale-blackoutnga.rf.gd")

})
}

