function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}
function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function start() 
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}