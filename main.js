canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
array_images=["mars1.jpg","mars2.jpg","mars3.jpg","Mars4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
bg_image=array_images[random_number];
rover_image="rover.png";
function add(){
    bg_image_tag=new Image();
    bg_image_tag.onload=uploadbg;
    bg_image_tag.src=bg_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_image_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
if(key_pressed=='38'){
    up();
    console.log("up has been pressed");
}
if(key_pressed=='40'){
    down();
    console.log("down has been pressed");
}
if(key_pressed=='37'){
    left();
    console.log("left has been pressed");
}
if(key_pressed=='39'){
    right();
    console.log("right has been pressed");
}
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();      
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();      
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();      
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();      
    }
}