
let modal = document.getElementById("myModal");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// x button to close window
span.onclick = function() {
  modal.style.display = "none";
}

// click outside of modal window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//LOCKED  CORNER DOOR FUNCTIONALITY
let door = document.getElementsByClassName('box9');
    let confirmIt = function (x) {
        if (!confirm('THIS DOOR IS LOCKED'));
    };
    for (let i=0,x=door.length;i<x;i++) {
        door[i].addEventListener('click', confirmIt, false);
    }
