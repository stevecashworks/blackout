const form=document.getElementById("form")
const params=  new URLSearchParams(window.location.search)
const plan=params.get("p")
const planSelector=document.getElementById("plan")
let amount;
const planMapping={
    allAccess:{
        
        male:15000,
        female:5000
    },
    exclusive:{
        male:50000,
        female:25000
    },
    special:{
        male:100000,
        female:100000,
    }
}
const preSalePlanMapping={
    allAccess:{
        
        male:10000,
        female:"free, just do a 30s video"
    },
    exclusive:{
        male:30000,
        female:15000
    },
    special:{
        male:80000,
        female:80000,
    }
}
console.log({plan})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data= new FormData(e.target)
    const formEntries={}
    data.forEach((value,key)=>{
    formEntries[key]=value
        
    })
    console.log(formEntries)
    reqBody=formEntries

    const selectedPlan= planSelector.value;
    const email =  document.getElementById("email").value;
    const currentGenderInput=document.querySelector('input[name="gender"]:checked').value
    const amount=preSalePlanMapping[selectedPlan][currentGenderInput]
    
    
    
if(!(typeof(amount)==="string")){

    payWithPaystack(amount,email)
    window.location.assign("http://presale-blackoutnga.rf.gd")
}
else{
    fetch("https://blackout-65jo.onrender.com/registerwithoutticket",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formEntries)
    }).then(res=>res.json()).then(data=>{
        alert(`${data.result}, you'll be redirected shortly`)
        window.location.assign("https://docs.google.com/forms/d/e/1FAIpQLSfup_HiVb2XTLhyxpwGCzrJTLedAaUuv9a4MiXnYf9o0KODvg/viewform?usp=sf_link")
    })
}

})
document.addEventListener('DOMContentLoaded', function() {
    if(plan){
        planSelector.value=plan;
    }
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
