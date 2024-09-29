const texts = [
    "Selamat datang di Indo Waroeng Prasmanan",
    "Perjalanan Rasa Nusantara, Dimulai dari Meja Anda",
    "Pecinta Kuliner, Surganya Ada di Sini!",
    "Jelajah Rasa Indonesia, Dari Sabang sampai Merauke."
];

let index = 0;
const textElement = document.getElementById("dynamicText");

function changeText() {
    textElement.classList.remove("show");


    setTimeout(() => {
        textElement.textContent = texts[index];
        textElement.classList.add("show");

        index = (index + 1) % texts.length;
    }, 500); 
}


setInterval(changeText, 2500); 


changeText();


const backgrounds = [
    'url(../img/background1.jpg)',
    'url(../img/background2.jpg)',
    'url(../img/event.jpeg)',
    'url(https://paomanrestaurant.com/wp-content/uploads/2024/07/paoman-restaurant-ambiance-scaled.webp)' 
];

let indexx = 0;
const header = document.getElementById('dynamicHeader');

function changeBackground() {

    header.style.backgroundImage = backgrounds[index];

    indexx = (index + 1) % backgrounds.length; 
}

setInterval(changeBackground, 2500);

// CARROUSEL

changeBackground();

let indexxx = 0;
const track = document.querySelector('.track');
const cards = document.querySelectorAll('.cardcont');
const totalCards = cards.length;

function moveCarousel() {
  indexxx++;
  if (index >= totalCards / 2) {
    index = 0;
  }
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000); 

const cateringElement = document.querySelector('.animated-button');
cateringElement.addEventListener('click', () => {
  window.location.href = '../booking/index.html';
});