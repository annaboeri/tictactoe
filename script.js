

var player1 = 'X';
var player2 = 'O';
var turn = 0;

var squares = document.querySelectorAll('.square');
var button = document.querySelector('#reset');
var alertWinner = document.querySelector('#alert-winner');
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5'); 
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');


// attaches click event listener to all squares
function createBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", renderPlayer);
  }
}

createBoard();


// function that checks for winning combination
function checkForWinner(){


  if (box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X" ){
   alertWinner.innerText = "X has won!";
  }
  else if (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  else if (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  else if (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  else if (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }  
  else if (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  else if (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  else if (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X" ){
    alertWinner.innerText = "X has won!";
  }
  //
  else if (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }  
  else if (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }
  else if (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O" ){
    alertWinner.innerText = "0 has won!";
  }

}

// renders current player on square 
function renderPlayer(){
  turn = turn + 1;
    console.log(this);
    if (turn === 1){
      console.log('turn ' + turn);
      this.innerHTML = player1;
      this.removeEventListener("click", renderPlayer);
    }
    else if (turn % 2 === 0){
      console.log('turn ' + turn);
      this.innerHTML = player2;
      this.removeEventListener("click", renderPlayer);
      checkForWinner();
    }
    else {
      console.log('turn ' + turn);
      this.innerHTML = player1;
      this.removeEventListener("click", renderPlayer);
      checkForWinner();
    };
  };


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