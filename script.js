
var player1 = 'X';
var player2 = 'O';
var currentPlayer = 'X';
var turn = 0;

var squares = document.querySelectorAll('.square');
var button = document.querySelector('#reset');
var alertWinner = document.querySelector('#alert-winner');


// attaches click event listener to all squares
squares.forEach(function(dig){
  dig.addEventListener('click', renderPlayer)
})

//toggles between x and o
function switchPlayer() {
  if (currentPlayer === player1){
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
}

// function that checks for winning combination
function checkForWinner(){    
  if (box1.innerText === currentPlayer && box2.innerText === currentPlayer && box3.innerText === currentPlayer){
   alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box4.innerText === currentPlayer && box5.innerText === currentPlayer && box6.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box7.innerText === currentPlayer && box8.innerText === currentPlayer && box9.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box1.innerText === currentPlayer && box4.innerText === currentPlayer && box7.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box2.innerText === currentPlayer && box5.innerText === currentPlayer && box8.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }  
  else if (box3.innerText === currentPlayer && box6.innerText === currentPlayer && box9.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box1.innerText === currentPlayer && box5.innerText === currentPlayer && box9.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
  else if (box3.innerText === currentPlayer && box5.innerText === currentPlayer && box7.innerText === currentPlayer ){
    alertWinner.innerText = currentPlayer + " has won!";
  }
}

// renders current player on square 
function renderPlayer(){
      this.innerHTML = currentPlayer;
      checkForWinner()
      switchPlayer()
      this.removeEventListener("click", renderPlayer);
}

//reset board
button.addEventListener("click", resetBoard);

function resetBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].innerHTML = "";
  }
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", renderPlayer);
  }
  alertWinner.innerText = "";
}

//Keep sense of state using local storage