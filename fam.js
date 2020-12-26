function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hF9MAXo4Z/model.json',modal_loaded);
}
function modal_loaded(){
    console.log("modal scammed");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,got_result);
}
function got_result(error,results){
    if(error){
        console.error("LET ME SCAM YOU");
    }
    else{
        console.log("SCAMMED HAHA");
        document.getElementById("reuslt_object").innerHTML=results[0].label;
        document.getElementById("reuslt_accurac").innerHTML=results[0].confidence.toFixed(3);
    }
}