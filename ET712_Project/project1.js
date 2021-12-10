//----------------------------------------------------------

let modal = document.getElementById("myModal");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

let modal2 = document.getElementById("myModal2");
let span2 = document.getElementsByClassName("close2")[0];

let modal3 = document.getElementById("myModal3");
let span3 = document.getElementsByClassName("close3")[0];

let tWin=document.getElementById("winCount");
let tLose=document.getElementById("loseCount");
let winC=0;
let loseC=0;

let reset_btn=document.getElementById("reset_btn");

let compareArray=[];
let compareArray2=[];
let countArray1=[];
let countArray2=[];

let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");
let box5=document.getElementById("box5");
let box6=document.getElementById("box6");
let box7=document.getElementById("box7");
let box8=document.getElementById("box8");
let box9=document.getElementById("box9");

let tag=document.getElementsByTagName('input');
//---Function to compare arrays
 function compareF (cArray,...cArray2){
    let newArray=[];
    newArray[0]=cArray;

    if ((cArray2.length==0)&&(newArray.length!=0)) {
      console.log("Box Clicked");
    }
    if(cArray==cArray2){
      console.log(`They match !`);
      newArray.length=0;
      cArray2.length=0;
      modal2.style.display = "block";
      countArray1.length=0;
      countArray2.length=0;
      winC+=1;
      tWin.innerHTML=winC;
      setTimeout(function () {
              alert('YOU ONLY NEED TO WIN ONCE!   GAME RELOADING...');
              location.reload(true);
            }, 1000);
          }
    else if ((cArray!=cArray2)&&(cArray.length!=0)&&(cArray2.length==1)) {
      console.log(`They dont match!`);
      newArray.length=0;
      cArray2.length=0;
      countArray1.length=0;
      countArray2.length=0;
      modal3.style.display="block";
      loseC+=1;
      tLose.innerHTML=loseC;
    }
  }


//-------Function to stop if array.length>1
function countLose(){
  if((countArray1.length>1)||(countArray2.length>1)){
    console.log(`YOU LOSE`);
    modal3.style.display="block";
    countArray1.length=0;
    countArray2.length=0;
    compareArray.length=0;
    compareArray2.length=0;
    loseC+=1;
    tLose.innerHTML=loseC;
  }
}
box1.addEventListener('click',function(){
  compareArray[0]=1;
  countArray1.push(1);
  countLose();
  compareF(...compareArray,...compareArray2);
  $(".b1").fadeOut(5000);
  $(".b1").attr("disabled", true)

})

box2.addEventListener('click',function(){
  compareArray[0]=2;
  countArray1.push(2);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b2").fadeOut(5000);
  $(".b2").attr("disabled", true)

})
box3.addEventListener('click',function(){
  compareArray[0]=3;
  countArray1.push(3);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b3").fadeOut(5000);
  $(".b3").attr("disabled", true)
})
box4.addEventListener('click',function(){
  compareArray[0]=4;
  countArray1.push(4);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b4").fadeOut(5000);
  $(".b4").attr("disabled", true)
})

box5.addEventListener('click',function(){
  compareArray2[0]=1;
  countArray2.push(1);
  countLose();
  compareF(...compareArray,...compareArray2);
  $(".b5").fadeOut(5000);
  $(".b5").attr("disabled", true)
})
box6.addEventListener('click',function(){
  compareArray2[0]=4;
  countArray2.push(4);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b6").fadeOut(5000);
  $(".b6").attr("disabled", true)
})
box7.addEventListener('click',function(){
  compareArray2[0]=3;
  countArray2.push(3);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b7").fadeOut(5000);
  $(".b7").attr("disabled", true)
})
box8.addEventListener('click',function(){
  compareArray2[0]=2;
  countArray2.push(2);
  compareF(...compareArray, ...compareArray2);
  countLose();
  $(".b8").fadeOut(5000);
  $(".b8").attr("disabled", true)
})

// When the user clicks on the hint button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// x button to close windows
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}
// click outside of modal windows
window.addEventListener("click",function(event){
    if (event.target == modal) {
      modal.style.display = "none";
    }
})

//------Reset button
  $("#reset_btn").click(function(){
    location.reload(true);
});

//-----locked door
let door = document.getElementsByClassName('box9');
    let confirmIt = function (x) {
        if (!confirm('THIS DOOR IS LOCKED'));
    };
    for (let i=0,x=door.length;i<x;i++) {
        door[i].addEventListener('click', confirmIt, false);
    }
