let x = document.getElementsByClassName("btn")[0];
let numCount=0;

let y=JSON.parse(pets1.json);

x.addEventListener("click", function(){


  console.log("you clicked");
  numCount++;
    if(numCount>1){
      x.classList.add("hidden");
    }
})
