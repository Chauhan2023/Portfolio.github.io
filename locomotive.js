gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---


gsap.from('#page2-lower',{
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:'#page2',
        scroller:'.main',
        start:'20% center',
        end:'70% bottom',
        scrub:4
    }
})

gsap.from('#page3-lower',{
    opacity:0,
    width:0,
    duration:1,
    scrollTrigger:{
        trigger:'#page3',
        scroller:'.main',
        start:'20% center',
        end:'70% bottom',
        scrub:2
    }
})

gsap.from('#page4-a > img',{
    opacity:0,
    width:0,
    duration:1,
    scrollTrigger:{
        trigger:'#page4',
        scroller:'.main',
        start:'10% center',
        end:'70% bottom',
        scrub:2
    }
})


gsap.from('#page5',{
    y:50,
    opacity:0,
    
    duration:1,
    scrollTrigger:{
        trigger:'#page4',
        scroller:'.main',
        start:'5% top',
        end:'70% bottom',
        scrub:2
    }
})




