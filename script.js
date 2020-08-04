
const notify = document.getElementById("notify").style.display = 'none';

const generateBtn = document.getElementById("generateBtn");
const generatePin = document.getElementById("generatePin");

const submitBtn = document.getElementById("submitBtn");

let inputPin = document.getElementById("input");

function number (data){
    
    switch (data) {
        case "C" :
            input.innerHTML = "";
            break;
        case "<" :
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            break;
    default :
      input.innerHTML += data;

    }
}



    function pin () {
        let max = 9999;
        let min = 1000;
         const getPin = Math.floor(Math.random() * ((max-min)+ 1)+min);
         generatePin.innerHTML = getPin;
     }
     

     function submit (){
         if (input.innerHTML === generatePin.innerHTML){
             document.getElementById("notify-matched").style.display = "block";
         }
         else{
             document.getElementById("notify-notMatched").style.display = "block";
         }
        
        }


   
   
