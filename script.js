const slider = document.querySelector(".content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const cardWidth = document.querySelector(".content > a").offsetWidth;

prevBtn.addEventListener("click", () => {
  scrollAmount += cardWidth;
  if (scrollAmount > 0) {
    scrollAmount = 0;
  }
  slider.style.transform = `translateX(${scrollAmount}px)`;
});

nextBtn.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  const maxScroll = -((slider.scrollWidth - slider.offsetWidth));
  if (scrollAmount < maxScroll) {
    scrollAmount = maxScroll;
  }
  slider.style.transform = `translateX(${scrollAmount}px)`;
});

document.getElementById('special-btn').addEventListener('click',()=>{
  document.querySelector('#hire').classList.remove('hidden')
})

document.getElementById('close-button').addEventListener('click',()=>{
  document.querySelector('#hire').classList.add('hidden')
})


