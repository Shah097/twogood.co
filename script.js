function locoanimate(){
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

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}  locoanimate();

var dhj = document.querySelector(".page1 .page1_part2");
var cursor1 = document.querySelector(".cursor");

function navanimate(){
    gsap.to('.nav1 svg',{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:".nav1",
            scroller:".main",
            start:"top 0",
            end:"top -5%",
            scrub:3
        }
    })
  

    gsap.to('.nav2 .nav21',{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:".nav2",
            scroller:".main",
            start:"top 0%",
            end:"top -5%",
            scrub:true,
            
        }
    })
} navanimate();

function loadanimate(){
    gsap.from(".nav1 ",{
        opacity:0,
        transform:"translateY(100%)",
        duration:1,
  })

    gsap.from(".page1_part1 #h1  ",{
          opacity:0,
          transform:"translateX(-100%)",
          duration:1,
          ease:"power3"
    })

    gsap.from(".page1_part1 #h2 ",{
        opacity:0,
        delay:1 ,
        transform:"translateX(100%)" ,
        ease:"power3"
  })

  gsap.from(".page1_part2 ",{
    opacity:0,
    scale:0,
    delay:1.2,
})
} loadanimate()

function playbtn_animation(){
    dhj.addEventListener("mouseenter",function(){
        gsap.to(".play",{
            opacity:1,
            scale:1,
    
        })
    })
    dhj.addEventListener("mousemove",function(det){
        gsap.to(".play",{
            top:det.y,
            left:det.x,
            transform: `translate(-50%,-50%)`,
            
        })
    })
    
    dhj.addEventListener("mouseleave",function(){
        gsap.to(".play",{
            opacity:0,
            scale:0,
    
        })
    })
}  playbtn_animation();

function part3_animate(){

    document.querySelector("#page31").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            opacity:1,
            scale:1,
            backgroundColor:" rgb(234, 165, 211)"
        })
    })

    document.querySelector("#page31").addEventListener("mousemove",function(det){
        gsap.to(".cursor",{
            left:det.x,
            top:det.y,
            transform: `translate(-50%,-50%)`,
            
        })
    })

    document.querySelector("#page31").addEventListener("mouseleave",function(){
                gsap.to(".cursor",{
                    opacity:0,
                    scale:0,
                })
            })

            
    document.querySelector("#page32").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            opacity:1,
            scale:1,
            backgroundColor:"skyblue"
        })
    })

    document.querySelector("#page32").addEventListener("mousemove",function(det){
        gsap.to(".cursor",{
            left:det.x,
            top:det.y,
            transform: `translate(-50%,-50%)`,
            
        })
    })

    document.querySelector("#page32").addEventListener("mouseleave",function(){
                gsap.to(".cursor",{
                    opacity:0,
                    scale:0,
                })
            })

            
    document.querySelector("#page33").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            opacity:1,
            scale:1,
            backgroundColor:"#F5DFCF"            
        })
    })

    document.querySelector("#page33").addEventListener("mousemove",function(det){
        gsap.to(".cursor",{
            left:det.x,
            top:det.y,
            transform: `translate(-50%,-50%)`,
        })
    })

    document.querySelector("#page33").addEventListener("mouseleave",function(){
                gsap.to(".cursor",{
                    opacity:0,
                    scale:0,
                })
            })

            
    document.querySelector("#page34").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            opacity:1,
            scale:1,
            backgroundColor:"rgb(123, 243, 139)"
        })
    })

    document.querySelector("#page34").addEventListener("mousemove",function(det){
        gsap.to(".cursor",{
            left:det.x,
            top:det.y,
            transform: `translate(-50%,-50%)`,
            
        })
    })

    document.querySelector("#page34").addEventListener("mouseleave",function(){
                gsap.to(".cursor",{
                    opacity:0,
                    scale:0,
                })
            })
}  part3_animate()