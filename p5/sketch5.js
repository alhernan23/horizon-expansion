let bgMusic; // Declare a variable for the background music

function preload() {
  bgMusic = loadSound('../audio/detour2.mp3'); // Load the music file
}

function setup() {
  // createCanvas(400, 400);
  bgMusic.play(); // Start playing the music as soon as the sketch loads

  red = createImg("../img/red5.png");
  red.class('object');
  red.position(200,400);

  orange = createImg("../img/orange5.png");
  orange.class('object');
  orange.position(400,400);

  yellow = createImg("../img/yellow5.png");
  yellow.class('object');
  yellow.position(700,400);

  green = createImg("../img/green5.png");
  green.class('object');
  green.position(1000,500);

  blue = createImg("../img/blue5.png");
  blue.class('object');
  blue.position(1300,400);  
}

function draw() {
  // background(220);
  // Your p5.js code goes here
  red.mousePressed(makeRed);
  orange.mousePressed(makeOrange);
  yellow.mousePressed(makeYellow);
  green.mousePressed(makeGreen);
  blue.mousePressed(makeBlue);
}

  function makeRed(){
    if (mySound1.isPlaying()){
      mySound1.pause(); 
    } else{
      mySound1.play();
    }
  }

  function makeOrange() {
  if (mySound2.isPlaying()){
    mySound2.pause();
  } else {
    mySound2.play();
  }
}

function makeYellow() {
  if (mySound3.isPlaying()){
    mySound3.pause();
  } else {
    mySound3.play();
  }
}

function makeGreen(){
  if (mySound4.isPlaying()){
    mySound4.pause(); 
  } else{
    mySound4.play();
  }
}

function makeBlue(){
  if (mySound5.isPlaying()){
    mySound5.pause(); 
  } else{
    mySound5.play();
  }
}

var startTypingButton = document.getElementById('start-typing');
var typingContainer = document.getElementById('typing-container');
var textToType = '[seriously, nothing to see here, just keep moving along...sjkhfksjahfjksahdfjkhajkdshfjkasdhfjkhadsjkfhksajdhfsjkahfjkahsjkfh';
var typingSpeed = 50; // in milliseconds
var typingIndex = 0;

function typeNextCharacter() {
  typingContainer.textContent += textToType.charAt(typingIndex);
  typingIndex++;
  
  if (typingIndex < textToType.length) {
    setTimeout(typeNextCharacter, typingSpeed);
  }
}

startTypingButton.addEventListener('click', function() {
  typeNextCharacter();
});

//when you click on canvas, the sound just plays
// function toggleSound(){
//   mySound1.play();
// }

