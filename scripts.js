document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const headingText="A Night Of Ecstacy"
    const heading=document.getElementById("heading")
    let count=0;
    setInterval(()=>{
        count=count<headingText.length?count+1:0;
    
        heading.innerHTML=headingText.slice(0,count)
    },150)
    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
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
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});
