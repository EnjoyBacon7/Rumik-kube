// -----------------------------------------------------------------------

// Initialize canvas and context
var gameCanvas = document.getElementById("gameCanvas");
var context = gameCanvas.getContext("2d");

// Remove anti-aliasing
context.imageSmoothingEnabled = false;

// -----------------------------------------------------------------------

// Loading sprite sheet
var spriteSheet = new Image();
spriteSheet.src = "numbers.png";

// -----------------------------------------------------------------------

// Creating the game structure
var game = {

  nbPlayers: 0,
  currentPlayer: 0,

  drawnCards: [],
  undrawnCards: [],

  heldCard: [], // Stores the card currently being dragged (it is useful to store it here to avoid having to loop through all cards to find it)
};

// Initializing a card class for reusability
class card {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.value = 0;
    this.color = 0;

    // State -2 for undrawn, -1 for board, 0 for p1, etc
    this.state = -1;
  }
}

// -----------------------------------------------------------------------

// Initializing the game
for (var j = 0; j < 8; j++) {
  for (var i = 1; i < 14; i++) {
    
    // A card instance
    var curCard = new card;
    curCard.posX = 0;
    curCard.posY = 0;
    curCard.value = i;
    curCard.color = j%4;  // Modulo (with j < 8) allows to loop through all 4 colors twice for each value
    curCard.onBoard = -1;

    game.undrawnCards.push(curCard);
  }
}

// Giving 14 cards to each player
/// Assuming there are 4 players (to fix)

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 14; j++) {
    var randomIndex = Math.floor(Math.random() * game.undrawnCards.length);
    curCard = game.undrawnCards[randomIndex];
    game.undrawnCards.splice(randomIndex, 1);

    // Assigning values to card
    curCard.state = i;
    curCard.posX = j * SPRITEWIDTH;
    curCard.posY = CANVASHEIGHT - SPRITEHEIGHT;

    game.drawnCards.push(curCard);
  }
}
console.log(game);