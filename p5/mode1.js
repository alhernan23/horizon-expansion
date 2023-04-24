let roomBg1;
function room1(){
    roomBg1 = createImg('../img/backrooms.png');
    roomBg1.position(0, 0);
    roomBg1.size(width, height);
}


//load sounds before you use them
// function preload(){
//   soundFormats('mp3', 'ogg');
//   mySound1 = loadSound('../audio/redsound.mp3');
// }


function displayChair() {
    chair = createImg('../img/chair.png');
    chair.position(100,300);

  }
  
  // function draw() {
  //   // background(0);
  //   chair.mousePressed(makeChair);
  // }

  //   function makeChair(){
  //     if (mySound1.isPlaying()){
  //       mySound1.pause(); 
  //     } else{
  //       mySound1.play();
  //     }
  //   }