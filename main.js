function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/807KFFX-5/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log(results);
        
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_accuracy").innerHTML = 'I can Hear - '+results[0].label;
        document.getElementById("sound_accuracy").style.color = "rgb("+r+","+g+","+b+")";
        

        img = document.getElementById("ear");

          if(results[0].label == "Barking")
          {

            img.src = 'Dog.jpg';

          }else if (results[0].label == "Meowing")
          {

            img.src = 'Cat.webp';

          }
    }    

}