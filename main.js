video="";
status="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
}

function draw(){
    image(video,0,0,400,400);
}

function start(){
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
}

function modelloaded(){
    console.log("Model has been loaded");
    document.getElementById("status").innerHTML="Status : Detecting objects";
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
