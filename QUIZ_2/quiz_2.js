let x = document.getElementsByClassName("btn")[0];
let numCount=0;

x.addEventListener("click", function(){
    let myRequest= new XMLHttpRequest();
    myRequest.open('GET', 'https://jonpier.github.io/QUIZ_2/pets2.json');
    myRequest.onload=function(){
    let myData=myRequest.responseText;
    console.log(myRequest.responseText);
    numCount++;
        if(numCount>1){
          x.classList.add("hidden");
        }
    }
    myRequest.send();
})
