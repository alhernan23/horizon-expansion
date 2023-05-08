let mySound1, mySound2, mySound3, mySound4, mySound5;

let red, orange, yellow, green, blue;


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
  }
  
//load sounds before you use them
function preload(){
  // soundFormats('mp3', 'ogg');
  mySound1 = loadSound('../audio/redsound4.mp3');
  mySound2 = loadSound('../audio/orangesound4.mp3');
  mySound3 = loadSound('../audio/yellowsound4.mp3');
  mySound4 = loadSound('../audio/greensound4.mp3');
  mySound5 = loadSound('../audio/bluesound4.mp3');
}


function setup() {
    //play sound when mouse is pressed on the canvas
    // cnv.mousePressed(toggleSound);

    red = createImg("../img/red4.png");
    red.class('object');
    red.position(100,400);

    orange = createImg("../img/orange4.png");
    orange.class('object');
    orange.position(400,400);

    yellow = createImg("../img/yellow4.png");
    yellow.class('object');
    yellow.position(700,400);

    green = createImg("../img/green4.png");
    green.class('object');
    green.position(1000,500);

    blue = createImg("../img/blue4.png");
    blue.class('object');
    blue.position(1300,400);  
  }
  
  function draw() {
    background(0);
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
  var textToType = '[um, youre not allowed in here...]';
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
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
