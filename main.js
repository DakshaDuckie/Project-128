var song1 = ""
var song2 = "";
var leftwrist = "";
var rightwrist = "";
function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(camera,0,0,600,530);
}

function modelLoaded(){
    console.log("model is loaded.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwrist = results[0].pose.leftWrist.y;
        rightwrist = results[0].pose.leftWrist.y;
        console.log("left wrist: "+leftwrist);
        console.log("right wrist: "+rightwrist);
    }
}