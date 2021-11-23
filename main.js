//https://i.postimg.cc/CKJ3PfJ3/santa-hat.png
noseX = 0;
noseY = 0;

function preload() {
    hat = loadImage("https://i.postimg.cc/NFnhBynK/santa-hat-gif.gif");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.center();
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("PoseNet has turned on");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x-75;
        noseY = result[0].pose.nose.y-250;
    }
}

function draw() {
    image(video,0,0,300,300);
    image(hat, noseX, noseY, 170, 220);
}

function take_snapshot() {
    save("christmas.png");
}