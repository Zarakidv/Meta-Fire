// window.addEventListener('load', () => {
//     const days = document.querySelector('.days')
//     const hours = document.querySelector('.hours')
//     const minutes = document.querySelector('.minutes')
//     const seconds = document.querySelector('.seconds')
    
//     let timeLeft = {
//         d: 0,
//         h: 0,
//         m: 0,
//         s: 0,
//     }
    
//     let totalSeconds;
    
//     function init() {
//         totalSeconds = Math.floor((new Date('01/01/2023') - new Date()) / 1000); 
//         setTimeLeft();
//         let interval = setInterval(() => {
//             if (totalSeconds < 0) {
//                 clearInterval(interval);
//             }
//             countTime();
//         }, 1000);
//     }
    
//     function countTime() {
//         if (totalSeconds > 0) {
//             --timeLeft.s;
//             if (timeLeft.m >= 0 && timeLeft.s < 0) {
//                 timeLeft.s = 59;
//                 --timeLeft.m;
//                 if (timeLeft.h >= 0 && timeLeft.m < 0) {
//                     timeLeft.m = 59;
//                     --timeLeft.h;
//                     if (timeLeft.d >= 0 && timeLeft.h < 0) {
//                         timeLeft.h = 23;
//                         --timeLeft.d;
//                     }
//                 }
//             }
//         }
//         --totalSeconds;
//         printTime();
//     }
    
//     function printTime() {
//         animateFlip(days, timeLeft.d);
//         animateFlip(hours, timeLeft.h);
//         animateFlip(minutes, timeLeft.m);
//         animateFlip(seconds, timeLeft.s);
//     }
    
//     function animateFlip(element, value) {
//         const valueInDom = element.querySelector('.bottom-back').innerText;
//         const currentValue = value < 10 ? '0' + value : '' + value;
    
//         if (valueInDom === currentValue) return;
    
//         element.querySelector('.top-back span').innerText = currentValue;
//         element.querySelector('.bottom-back span').innerText = currentValue;
    
    
// gsap.to(element.querySelector('top'), 0.7, {
//             rotationX: '-180deg',
//             transformPerspective: 300,
//             ease: Quart.easeOut,
//             onComplete: function() {
//                 element.querySelector('.top').innerText = currentValue; 
//                 element.querySelector('.bottom').innerText = currentValue; 
//                 gsap.set(element.querySelector('.top'), {rotationX: 0});
//             }
//         });
    
//         gsap.to(element.querySelector('.top-back'), 0.7, {
//             rotationX: 0,
//             transformPerspective: 300,
//             ease: Quart.easeOut,
//             clearProps: 'all'
//         });
    
//     }
    
    
    
//     function setTimeLeft() {
//         timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
//         timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
//         timeLeft.m = Math.floor(totalSeconds / (60) % 60);
//         timeLeft.s = Math.floor(totalSeconds % 60);
//     }
    
//     init();
// });

var countDownDate = new Date("novembre 01, 2022 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
if( distance < 0){
    clearInterval(x);

document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";
}
},1000)
