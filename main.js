Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    img_quality : 90,
})

camera=document.getElementById("camera");

Webcam.attach("camera");

function snapshot(){
   Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri+ "'/>";
   })}

console.log("ml5",ml5.version);
Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SS0CcVY8U/model.json',modelloaded);

function modelloaded(){
console.log('model Loaded!')
}

function check(){
    img= document.getElementById('captured_image');
    Classifier.classify(img,gotResult);
}

function gotResult(error,results){

    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }



}