// Initialize canvas and context
var gameCanvas = document.getElementById("gameCanvas");
var context = gameCanvas.getContext("2d");
context.imageSmoothingEnabled = false;

// Load sprite sheet
var spriteSheet = new Image();
spriteSheet.src = "numbers.png";

// Draw sprite function 0 blue, 1 red, 2 green, 3 yellow
function drawSprite(x, y, number, color) {
  context.drawImage(spriteSheet, number * 10, color * 10 + 10, 10, 10, x, y, 100, 100);
}

// Creating the game structure
var game = {

  nbPlayers: 0,
  currentPlayer: 0,

  playerCards: [],

  boardCards: [],

  undrawnCards: [],
};

// Initializing the game
for (var j = 0; j < 4; j++) {
  for (var i = 1; i < 14; i++) {
    
    // A card instance
    card = {
      posX: 0,
      posY: 0,
      value: i,
      color: j,

      dragging: false,
      onBoard: false,
    }

    game.undrawnCards.push(card);
    game.undrawnCards.push(card);
  }
}

// Giving 14 cards to each player
/// Assuming there are 4 players (to fix)

for (var i = 0; i < 4; i++) {
  game.playerCards.push([]);

  for (var j = 0; j < 14; j++) {
    var randomIndex = Math.floor(Math.random() * game.undrawnCards.length);
    game.playerCards[i].push(game.undrawnCards[randomIndex]);
    game.undrawnCards.splice(randomIndex, 1);
  }
}

console.log(game.undrawnCards)

gameCanvas.onmousedown = function(e) {

  var x = e.clientX - gameCanvas.offsetLeft;
  var y = e.clientY - gameCanvas.offsetTop;


}

function renderBoard() {

  for (var i = 0; i < game.boardCards.length; i++) {
    for (var j = 0; j < game.boardCards[i].length; j++) {
      var card = game.boardCards[i][j];
      drawSprite(card.posX, card.posY, card.value, card.color);
    }
  }
} 

function renderHand() {

  context.fillStyle = "grey";
  context.fillRect(0, 700, 2000, 100);
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    drawSprite(i*100, 700, card.value, card.color);
  }
}