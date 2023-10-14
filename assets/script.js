const slider = document.querySelector(".content");


document.querySelector('.special-btn').addEventListener('click',()=>{
  document.querySelector('#hire').classList.remove('hidden')
})

document.getElementById('close-button').addEventListener('click',()=>{
  document.querySelector('#hire').classList.add('hidden')
})



// GSAP animations

// Nav Animation
gsap.fromTo('nav>div>ul>*',{opacity: 0,y:-20}, {y:0,ease:"Power2.easeOut", delay: 0.25, stagger: 0.25, opacity:1, duration:1})

gsap.to("#homeCenter, #greet, #prof, #butn",{letterSpacing:0,delay: 0.25, ease:"Power2.easeOut",stagger: 0.25, opacity:1,duration:1, y:0, x:0})

// mobile nav animation
gsap.fromTo('#mobileNav>*',{opacity: 0,y:10}, {y:0,ease:"Power2.easeOut", delay: 0.25, stagger: 0.25, opacity:1, duration:1})



// heading animation
const heads = ["#projects>div>h1", "#services>div>h1", "#about>div>h1"]

heads.forEach((head)=>{
  ScrollTrigger.create({
    trigger: head,
    start: 'top bottom',
    end: 'bottom top',
    marker: true,
    onEnter: () => {
        gsap.to(head, { opacity: 1 , x:0,y:0, duration:0.5,ease:"Power2.easeOut"});
    }
  });
});

// project animation
const projects = gsap.utils.toArray(".project")

ScrollTrigger.create({
    trigger: ".project",
    start: 'top bottom',
    end: 'bottom top',
    marker: true,
    onEnter: () => {
        gsap.to(".project", { opacity: 1 , x:0,y:0, duration:0.5,ease:"Power2.easeOut", stagger:0.5, delay:0.25});
    }
  });



