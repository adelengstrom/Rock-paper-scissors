//var userinput = null;


function rock() {
   
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 0) {
       alert("draw") 
    } else if (computerinput == 1) {
       document.getElementById("winner") = "computer";
    } else {
        alert("you win")
    }
}

function paper() {
  
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 1) {
       alert("draw") 
    } else if (computerinput ==0) {
        alert("you lost")
    } else {
        alert("you win")
    }
}
function scissors() {
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 2) {
       alert("draw") 
    } else if (computerinput == 1) {
        alert("you lost")
    } else {
        alert("you win")
    }
}