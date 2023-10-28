const slider = document.querySelector(".content");


document.querySelector('#butn').addEventListener('click', () => {
  document.querySelector('#hire').classList.remove('hidden')
})

document.getElementById('close-button').addEventListener('click', () => {
  document.querySelector('form').reset();
  document.querySelector('#hire').classList.add('hidden')
})



/* GSAP animations */

// Nav Animation
gsap.fromTo('nav>div>ul>*', { opacity: 0, y: -20 }, { y: 0, ease: "Power2.easeOut", delay: 0.25, stagger: 0.25, opacity: 1, duration: 1 })

gsap.to("#homeCenter, #greet, #prof, #butn", { letterSpacing: 0, delay: 0.25, ease: "Power2.easeOut", stagger: 0.25, opacity: 1, duration: 1, y: 0, x: 0 })

// mobile nav animation
gsap.fromTo('#mobileNav>*', { opacity: 0, y: 10 }, { y: 0, ease: "Power2.easeOut", delay: 0.25, stagger: 0.25, opacity: 1, duration: 1 })



// heading animation
const heads = ["#projects>div>h1", "#services>div>h1", "#about>div>h1"]

heads.forEach((head) => {
  ScrollTrigger.create({
    trigger: head,
    start: 'top bottom',
    end: 'bottom top',
    marker: true,
    onEnter: () => {
      gsap.to(head, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "Power2.easeOut" });
    }
  });
});

// project animation
const projects = gsap.utils.toArray(".project")

ScrollTrigger.create({
  trigger: "#projects",
  start: 'top center',
  end: 'bottom top',
  marker: true,
  onEnter: () => {
    gsap.to(".project", { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "Power2.easeOut", stagger: 0.5, delay: 0.25 });
  }
});

// Service animation
const service = gsap.utils.toArray(".service")
ScrollTrigger.create({
  trigger: "#services",
  start: 'top center',
  end: 'bottom top',
  marker: true,
  onEnter: () => {
    gsap.to(".service", { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "Power2.easeOut", delay: 0.25 });
  }
});

// About
ScrollTrigger.create({
  trigger: "#about",
  start: 'top center',
  end: 'bottom top',
  marker: true,
  onEnter: () => {
    gsap.to(".container>p, .container>img", { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "Power2.easeOut", delay: 0.25 });
  }
});



// Form validity

const input = gsap.utils.toArray(".inputField")

input.forEach((e) => {
  e.addEventListener('input', function () {
    var inputField = this;

    if (inputField.checkValidity() && inputField !== '') {
      inputField.style.borderColor = ''; 
      e.querySelector("~label").classList.add('filled')
      inputField.value = '';
      // Allow moving to the next field or perform other actions
    } else {
      inputField.style.borderColor = '#ff0000'; // Apply red border for invalid input
      // Prevent moving to the next field or perform other actions
    }
    
  })
});

// Form Validation
const number = document.querySelector("#number");
document.querySelector("#submit").addEventListener('click',()=>{
  if (number.value.length!=10 || typeof parseInt(number.value) != "number"){
    alert("Enter a valid Values");
    number.value = ""
  }
})

