//main js sketch that controls what happens in modes

let mode = 1;


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    // cnv.parent('mySketch');

    room1();

  }
  
  function draw() {

    //for functions that need to loop
  
    if (mode == 1){
      //functions that pertain for mode 1 called here
    }

    if (mode == 2){
      //functions that pertain for mode 2 called here
      
    }

    if (mode == 3){
      //functions that pertain for mode 3 called here
      
    }

    if (mode == 4){
      //functions that pertain for mode 4 called here
      
    }

    if (mode < 1){
      mode = 1;
    } else if (mode > 4){
      mode = 4;
    }
  }

//WHEN SWITCHING PAGES WITH ARROW KEYS
  function keyPressed(){
    console.log(mode)
    //for functions that only need to happen once on key press
    if (keyCode == RIGHT_ARROW){
      mode ++;
    } else if (keyCode == LEFT_ARROW){
      mode --;
    }

    if (mode == 1){
      //functions that pertain for mode 1 called here
      room1();
    }

    if (mode == 2){
      //functions that pertain for mode 2 called here
      room2();
    }

    if (mode == 3){
      //functions that pertain for mode 3 called here
      room3();
    }

    if (mode == 4){
      //functions that pertain for mode 4 called here
      room4();
    }
  }


  // function mousePressed(){
  //   //for functions that happen on mousePressed

  // }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
