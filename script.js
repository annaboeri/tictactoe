

var player1 = 'X';
var player2 = 'O';
var turn = 0;

var squares = document.getElementsByClassName('square');

for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", renderPlayer);
}

// renders player on div & toggles player 
function renderPlayer(){
  turn = turn + 1;
    console.log(this);
    if (turn === 1){
      console.log('turn 1');
      this.innerHTML = player1;
      this.removeEventListener("click", renderPlayer);
    }
    else if (turn % 2 === 0){
      console.log('turn even');
      this.innerHTML = player2;
      this.removeEventListener("click", renderPlayer);
    }
    else {
      console.log('turn odd');
      this.innerHTML = player1;
      this.removeEventListener("click", renderPlayer);
    };
  };


//Score/winning combos - state of win/state of draw/loss

//reset

//Keep sense of state using local storage