// Import Vanta.js and THREE.js
import 'vanta/dist/vanta.waves.min.js';
import * as THREE from 'three';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Typed.js
import Typed from 'typed.js';

// Import Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../stylesheets/swiper.css';

// Import jQuery and Marquee
import $ from 'jquery';
import 'jquery.marquee';

let vantaEffect;

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'fade-up',
});

// Initialize Typed.js
const typedEn = new Typed('.auto-type-en', {
    strings: ['Software Engineer.', 'Front-End Developer.', 'Flutter Developer.', 'UI Engineer.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

const typedFr = new Typed('.auto-type-fr', {
    strings: ['Ingénieur logiciel.', 'Développeur Front-End.', 'Desarrollador Flutter.', 'Ingénieur UI.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

const typedEs = new Typed('.auto-type-es', {
    strings: ['Ingeniero de software.', 'Desarrollador Front-End.', 'Desarrollador Flutter.', 'Ingeniero de UI.'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

// Initialize Swiper instances
const swiper1 = new Swiper('.mySwiper1', {
    effect: 'cards',
    grabCursor: true,
});

const swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Marquee
$(document).ready(function () {
    $('.marquee').marquee({
        duration: 15000,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true,
    });
});

// Initialize Vanta.js
window.addEventListener('load', () => {
  const el = document.querySelector('#hero-wrapper-container');
  if (!el) return;

  if (vantaEffect) vantaEffect.destroy();

  vantaEffect = window.VANTA.WAVES({
    el,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x0f1d2b,
    shininess: 11,
    waveHeight: 4.5,
    waveSpeed: 0.9
  });
});