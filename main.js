function startClassification(){
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u8aJM5H5n/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}