const blueCard = document.querySelector(".card-blue-dark");
const yellowTiles = document.querySelectorAll(".ot-card-yelow");
const arrowBlue = document.querySelector("#arrowBlue");
const arrowYellow = document.querySelector("#arrowYellow");
const textOne = document.querySelector(".one");
const textTwo = document.querySelector(".two");
const textThree = document.querySelector(".three");
const textFour = document.querySelector(".four");
const orangeCard = document.querySelector(".ot-card-orange");
const heroesImg = document.querySelector(".we-can-be-heroes");
const video = document.querySelector(".video-heroes")
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let isOn = 0;
let yellowCard = yellowTiles[1];


//Text tiles
blueCard.addEventListener("mouseover", isOnBlue);
yellowCard.addEventListener("mouseover", isOnYellow);
blueCard.addEventListener("mouseout", onMouseOut);
yellowCard.addEventListener("mouseout", onMouseOut);
blueCard.addEventListener("click", onMouseClick);
yellowCard.addEventListener("click", onMouseClick);

function isOnBlue(){
  isOn = 1;
  onMouseOver(isOn);
}

function isOnYellow(){
  isOn = 2;
  onMouseOver(isOn);
}

function onMouseOver(isOn){
  if(isOn == 1){
    gsap.to(arrowBlue, {
      opacity: 1,
      duration:0.2,
      ease: Power2.easeIn,
    })
  } 
  else if(isOn == 2){
    gsap.to(arrowYellow, {
      opacity: 1,
      duration:0.2,
      ease: Power2.easeIn,
    })
  }
}

function onMouseOut(){
  if(isOn == 1){
    gsap.to(arrowBlue, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
    isOn = 0;
  }
  else if(isOn == 2){
    gsap.to(arrowYellow, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
    isOn = 0;
  }
}

function onMouseClick(){
  if(isOn == 1){
    blueCard.removeEventListener("mouseover", onMouseOver);
    blueCard.removeEventListener("mouseout", onMouseOut);
    gsap.to(textOne, {
      y: -250,
      duration:1,
      ease: Power2.easeIn,
    });    
    gsap.to(arrowBlue, {
      opacity: 0,
      visibility: "hidden",
      duration:1,
      ease: Power2.easeIn,
    });
    gsap.to(textTwo,{
      opacity:1,
      y: -240,
      duration:1,
      ease: Power2.easeIn,
    });
  }
  else if(isOn == 2){
    yellowCard.removeEventListener("mouseover", onMouseOver);
    yellowCard.removeEventListener("mouseout", onMouseOut);
    gsap.to(textThree, {
      y: -50,
      duration:1,
      ease: Power2.easeIn,
    });    
    gsap.to(arrowYellow, {
      opacity: 0,
      visibility: "hidden",
      duration:1,
      ease: Power2.easeIn,
    });
    gsap.to(textFour,{
      opacity:1,
      y: -150,
      duration:1,
      ease: Power2.easeIn,
    });
  }
}


//Heroes video tile
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.beginPath();
context.moveTo(100, 50);
context.lineTo(200, 90);
context.lineTo(100, 130);
context.closePath();
context.fillStyle="white";
context.fill();

orangeCard.addEventListener("mouseover", onMouseOn);
orangeCard.addEventListener("mouseout", onMouseOff);
orangeCard.addEventListener("click", onMousePlay);

function onMouseOn(){
  gsap.to(canvas, {
      opacity: 1,
      duration:0.2,
      ease: Power2.easeIn,
    })
}

function onMouseOff(){
    gsap.to(canvas, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
}

function onMousePlay(){
  let tl = gsap.timeline();
  tl.to(canvas, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
  tl.to(video, {
        opacity: 1,
        duration:0.2,
        ease: Power2.easeIn,
    })
  tl.to(heroesImg, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
  video.play()
  
}

video.onended = function() {
    gsap.to(canvas, {
        opacity: 1,
        duration:0.2,
        ease: Power2.easeIn,
    })
  gsap.to(video, {
        opacity: 0,
        duration:0.2,
        ease: Power2.easeIn,
    })
  gsap.to(heroesImg, {
        opacity: 1,
        duration:0.2,
        ease: Power2.easeIn,
    })
}
