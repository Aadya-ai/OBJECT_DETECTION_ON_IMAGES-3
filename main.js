img = "";
status = "";

function preload() {
    img = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00008B");
    text("Bed", 60, 75);
    noFill();
    stroke("#00008B");
    rect(50, 60, 550, 350);
}

function Kchat() {
    window.location.href = "https://aadya-ai.github.io/OBJECT_DETECTION_ON_IMAGES-Kchat/";
}

function Back() {
    window.location.href = "https://aadya-ai.github.io/OBJECT_DETECTION_ON_IMAGES-1/";
}
