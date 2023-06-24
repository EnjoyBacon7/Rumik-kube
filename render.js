// -----------------------------------------------------------------------

// Draw individual sprite function (0 blue, 1 red, 2 green, 3 yellow)
function drawNumber(x, y, number, color) {
  context.drawImage(spriteSheet, number * SPRITEPIXELWIDTH, color * SPRITEPIXELHEIGHT + SPRITEPIXELHEIGHT, SPRITEPIXELWIDTH, SPRITEPIXELHEIGHT, x, y, SPRITEWIDTH, SPRITEHEIGHT);
}

// -----------------------------------------------------------------------

// Rendering functions. Cards are considered in hand when not yet dropped. Once dropped, they are considered on board.
function renderBoard() {

  for (var i = 0; i < game.drawnCards.length; i++) {
    if(game.drawnCards[i].state == -1) {
      var card = game.drawnCards[i];
      drawNumber(card.posX, card.posY, card.value, card.color);
    }
  }
} 

function renderHand() {

  // Draw hand background
  context.fillStyle = "grey";
  context.fillRect(0, CANVASHEIGHT-SPRITEHEIGHT, CANVASWIDTH, SPRITEHEIGHT);

  // Draw cards
  for(var i = 0; i < game.drawnCards.length; i++) {
    var card = game.drawnCards[i];
    if(card.state == game.currentPlayer) {
      drawNumber(card.posX, card.posY, card.value, card.color);
      if(card == game.heldCard) {
        context.strokeStyle = "red";
        context.strokeRect(card.posX, card.posY, SPRITEWIDTH, SPRITEHEIGHT);
      }
    }
  }
}

function renderHighlights() {
  var heldCard;
  if(game.heldCard != -1) {
    heldCard = game.drawnCards[game.heldCard];
  }
  else {
    return -1;
  }

  for(var i = 0; i < game.drawnCards.length; i++) {
    var card = game.drawnCards[i];
    if(card != heldCard && card.state == -1) {
      if((card.color == heldCard.color) || (card.value == heldCard.value++) || (card.value == heldCard.value--)) {
        context.strokeStyle = "red";
        context.strokeRect(card.posX, card.posY, SPRITEWIDTH, SPRITEHEIGHT);
      }
    }
  }
}

// -----------------------------------------------------------------------

// Draw Submit button
/// Non functionnal
function renderEndTurnBtn() {
  context.fillStyle = "black";
  context.fillRect(END_TURN_POS_X, END_TURN_POS_Y, SPRITEWIDTH, SPRITEHEIGHT);
  context.fillStyle = "white";
  context.font = "30px Arial";
  context.fillText("DONE", END_TURN_POS_X, END_TURN_POS_Y + SPRITEHEIGHT*(2/3));
}

function renderResetBtn() {
  context.fillStyle = "black";
  context.fillRect(RESET_POS_X, RESET_POS_Y, SPRITEWIDTH, SPRITEHEIGHT);
  context.fillStyle = "yellow";
  context.font = "30px Arial";
  context.fillText("RESET", RESET_POS_X, RESET_POS_Y + SPRITEHEIGHT*(2/3));
}

// -----------------------------------------------------------------------

// Global Rendering

function renderGame() {

  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  renderBoard();
  renderHand();
  renderHighlights();
  renderEndTurnBtn();
  renderResetBtn();
}