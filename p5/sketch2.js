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
  mySound1 = loadSound('../audio/redsound2.mp3');
  mySound2 = loadSound('../audio/orangesound2.mp3');
  mySound3 = loadSound('../audio/yellowsound2.mp3');
  mySound4 = loadSound('../audio/greensound2.mp3');
  mySound5 = loadSound('../audio/bluesound2.mp3');
}


function setup() {
    //play sound when mouse is pressed on the canvas
    // cnv.mousePressed(toggleSound);

    red = createImg("../img/red2.png");
    red.class('object');
    red.position(100,300);

    orange = createImg("../img/orange2.png");
    orange.class('object');
    orange.position(400,300);

    yellow = createImg("../img/yellow2.png");
    yellow.class('object');
    yellow.position(730,350);

    green = createImg("../img/green2.png");
    green.class('object');
    green.position(1050,350);

    blue = createImg("../img/blue2.png");
    blue.class('object');
    blue.position(1300,200);  
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

//when you click on canvas, the sound just plays
  // function toggleSound(){
  //   mySound1.play();
  // }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
