//var userinput = null;

function hidestone() {
    document.getElementById("stone").style.display = "none";
}

function hidepaper() {
    document.getElementById("paperimg").style.display = "none";
}

function hidescissors() {
    document.getElementById("scissorsimg").style.display = "none";
}
function hideall () {
    hidestone()
    hidepaper()
    hidescissors()  
}

function rock() {
    document.getElementById("stone").style.display = "block";
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 0) {
        var para = document.getElementById('winner');
        para.innerText = 'Tie';
    } else if (computerinput == 1) {
        var para = document.getElementById('winner');
        para.innerText = 'You Win!';
    } else {
        var para = document.getElementById('winner');
        para.innerText = 'You lose!';
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function paper() {
    document.getElementById("paperimg").style.display = "block";
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 1) {
        var para = document.getElementById('winner');
        para.innerText = 'Tie';
    } else if (computerinput ==0) {
        var para = document.getElementById('winner');
        para.innerText = 'You Win!';
    } else {
        var para = document.getElementById('winner');
        para.innerText = 'You Lose!';
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}
function scissors() {
    document.getElementById("scissorsimg").style.display = "block";
    var computerinput = (Math.floor(Math.random()* 3))
    if (computerinput == 2) {
        var para = document.getElementById('winner');
        para.innerText = 'Tie'; 
    } else if (computerinput == 1) {
        var para = document.getElementById('winner');
        para.innerText = 'You Win!';
    } else {
        var para = document.getElementById('winner');
        para.innerText = 'You Lose!';
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}
function playagain() {
    var para = document.getElementById('winner');
    para.innerText = '';
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    hideall()

}