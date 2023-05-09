let bgMusic; // Declare a variable for the background music

function preload() {
  bgMusic = loadSound('../audio/detour2.mp3'); // Load the music file
}

function setup() {
  // createCanvas(400, 400);
  bgMusic.play(); // Start playing the music as soon as the sketch loads
}

function draw() {
  // background(220);
  // Your p5.js code goes here
}
