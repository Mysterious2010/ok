function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.hide();
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
}
function start(){
    objectsDetector=ml5.objectDetector('cococssd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    object_name=document.getElementById("object_name").ariaValueMax;
}