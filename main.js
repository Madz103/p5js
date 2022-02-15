function preload() {
  img = loadImage('https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg');
}

function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(110 , 250);
   
}
 function draw() {

    image(img, 0 ,0 , 640 , 480);
    fill (0,176,0);
    stroke (231,0,0);
    circle (600 ,50 ,70);
    circle (40 , 50 , 70);
    circle(600 , 440 , 70);
    circle(40 , 440 ,70);
 }

 function take_snapshot(){
    save('student_name.png');
 }

 