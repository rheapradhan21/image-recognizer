

Webcam.set({
    width:340,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='capture_image' src='"+data_uri+"'/>";
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o6o2DswGT/model.json', modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

function check(){
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('object_name').innerHTML = results[0].label;
        document.getElementById('object_accuracy').innerHTML = results[0].confidence.toFixed(2);
    }
}