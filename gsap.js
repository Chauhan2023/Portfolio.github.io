gsap.from(".left",{
    y:-100,
    duration:1,
    delay:.5
})




function loader(){
    const t1=gsap.timeline();

    t1.from(".loader_text>h3",{
        x:50,
        opacity:0,
        duration:.7,
    })

    t1.to(".loader_text>h3",{
    x:-50,
        opacity:0,
        duration:.7,
    })
    t1.to(".loader",{
        opacity:0,
        duration:.2,
    })
    t1.from(".main",{
        opacity:0,
        duration:.5,
        y:-400
    })

    t1.to(".loader",{
        display:'none',
        
    })



    

   

}

loader();