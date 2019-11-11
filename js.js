/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
// var userinput = null;

var Gamehistory = []

function hidestone () {
  document.getElementById('stone').style.display = 'none'
  document.getElementById('stone-computer').style.display = 'none'
}

function hidepaper () {
  document.getElementById('paperimg').style.display = 'none'
  document.getElementById('paperimg-computer').style.display = 'none'
}

function hidescissors () {
  document.getElementById('scissorsimg').style.display = 'none'
  document.getElementById('scissorsimg-computer').style.display = 'none'
}
function hideversus () {
  document.getElementById('versuspic').style.display = 'none'
}
function hideall () {
  hidestone()
  hidepaper()
  hidescissors()
  hideversus()
}

function rock () {
  var computerinput = (Math.floor(Math.random() * 3))
  if (computerinput == 0) {
    var para = document.getElementById('winner')
    para.innerText = 'Tie'
    Gamehistory.push('Tie')
    document.getElementById('stone-computer').style.display = 'block'
  } else if (computerinput == 1) {
    var para = document.getElementById('winner')
    document.getElementById('scissorsimg-computer').style.display = 'block'
    para.innerText = 'You Win!'
    Gamehistory.push('Player wins')
  } else {
    var para = document.getElementById('winner')
    para.innerText = 'You lose!'
    Gamehistory.push('Computer wins')
    document.getElementById('paperimg-computer').style.display = 'block'
  }
  document.getElementById('rock').disabled = true
  document.getElementById('paper').disabled = true
  document.getElementById('scissors').disabled = true
  document.getElementById('stone').style.display = 'block'
  document.getElementById('Game_history').innerHTML = Gamehistory.join('<br />')
  document.getElementById('versuspic').style.display = 'inline'
}

// eslint-disable-next-line no-unused-vars
function paper () {
  document.getElementById('paperimg').style.display = 'block'
  var computerinput = (Math.floor(Math.random() * 3))
  if (computerinput == 1) {
    var para = document.getElementById('winner')
    para.innerText = 'Tie'
    Gamehistory.push('Tie')
    document.getElementById('paperimg-computer').style.display = 'block'
  } else if (computerinput == 0) {
    var para = document.getElementById('winner')
    para.innerText = 'You Win!'
    Gamehistory.push('Player wins')
    document.getElementById('stone-computer').style.display = 'block'
  } else {
    var para = document.getElementById('winner')
    para.innerText = 'You Lose!'
    Gamehistory.push('Computer wins')
    document.getElementById('scissorsimg-computer').style.display = 'block'
  }
  document.getElementById('rock').disabled = true
  document.getElementById('paper').disabled = true
  document.getElementById('scissors').disabled = true
  document.getElementById('Game_history').innerHTML = Gamehistory.join('<br />')
  document.getElementById('versuspic').style.display = 'inline'
}
function scissors () {
  document.getElementById('scissorsimg').style.display = 'block'
  var computerinput = (Math.floor(Math.random() * 3))
  if (computerinput == 2) {
    var para = document.getElementById('winner')
    para.innerText = 'Tie'
    Gamehistory.push('Tie')
    document.getElementById('scissorsimg-computer').style.display = 'block'
  } else if (computerinput == 1) {
    var para = document.getElementById('winner')
    para.innerText = 'You Win!'
    Gamehistory.push('Player wins')
    document.getElementById('paperimg-computer').style.display = 'block'
  } else {
    var para = document.getElementById('winner')
    para.innerText = 'You Lose!'
    Gamehistory.push('Computer wins')
    document.getElementById('stone-computer').style.display = 'block'
  }

  document.getElementById('rock').disabled = true
  document.getElementById('paper').disabled = true
  document.getElementById('scissors').disabled = true
  document.getElementById('Game_history').innerHTML = Gamehistory.join('<br />')
  document.getElementById('versuspic').style.display = 'inline'
}
function playagain () {
  var para = document.getElementById('winner')
  para.innerText = ''
  document.getElementById('rock').disabled = false
  document.getElementById('paper').disabled = false
  document.getElementById('scissors').disabled = false
  hideall()
}
function ROCK () {
  document.getElementById('stone').src = 'Pictures/cock.png'
  document.getElementById('stone-computer').src = 'Pictures/cock.png'
}
function ROCKOFF () {
  document.getElementById('stone').src = 'Pictures/stenbild.png'
  document.getElementById('stone-computer').src = 'Pictures/stenbild.png'
}
