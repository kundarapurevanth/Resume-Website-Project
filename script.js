const images = [
   "https://res.cloudinary.com/dyverf4kj/image/upload/v1767335997/Screenshot_2026-01-02_120654_oyzkna.png",
  "https://res.cloudinary.com/dyverf4kj/image/upload/v1767336567/Screenshot_2026-01-02_122246_h2wyo4.png",
  "https://res.cloudinary.com/dyverf4kj/image/upload/v1767336018/Screenshot_2026-01-02_121255_fev4ru.png"
];

let index = 0;
const mainImg = document.getElementById("mainImg");

setInterval(() => {
  index = (index + 1) % images.length;
  mainImg.src = images[index];
}, 5000);
 
// MISSION SECTION SCROLL ANIMATION
const mission = document.getElementById("mission");

window.addEventListener("scroll", () => {
  const position = mission.getBoundingClientRect().top;
  const screenHeight = window.innerHeight / 1.3;

  if(position < screenHeight){
    mission.classList.add("show");
  }
});

// PROGRAMS SECTION ANIMATION
const programsSection = document.getElementById("programs");

window.addEventListener("scroll", () => {
  const pos = programsSection.getBoundingClientRect().top;
  const screen = window.innerHeight / 1.3;

  if(pos < screen){
    programsSection.classList.add("show");
  }
});

// CARD CLICK REDIRECT
document.querySelectorAll(".program-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    window.open(url, "_blank");
  });
});

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.open(url, "_blank"); // open in new tab
  });
});

function goToDonate() {
  // Replace this URL with your donation page
  const donateURL = "https://www.petaindia.com/donate/";
  window.open(donateURL, "_blank"); // opens in a new tab
}

// Open social links in a new tab
function openLink(url) {
  window.open(url, "_blank");
}


 




