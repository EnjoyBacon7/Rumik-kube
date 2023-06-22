// -----------------------------------------------------------------------

// Draw individual sprite function (0 blue, 1 red, 2 green, 3 yellow)
function drawSprite(x, y, number, color) {
  context.drawImage(spriteSheet, number * SPRITEPIXELWIDTH, color * SPRITEPIXELHEIGHT + SPRITEPIXELHEIGHT, SPRITEPIXELWIDTH, SPRITEPIXELHEIGHT, x, y, SPRITEWIDTH, SPRITEHEIGHT);
}

// -----------------------------------------------------------------------

// Rendering functions. Cards are considered in hand when not yet dropped. Once dropped, they are considered on board.
function renderBoard() {

  for (var i = 0; i < game.drawnCards.length; i++) {
    if(game.drawnCards[i].state == -1) {
      var card = game.drawnCards[i];
      drawSprite(card.posX, card.posY, card.value, card.color);
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
      drawSprite(card.posX, card.posY, card.value, card.color);
      if(card == game.heldCard) {
        context.strokeStyle = "red";
        context.strokeRect(card.posX, card.posY, SPRITEWIDTH, SPRITEHEIGHT);
      }
    }
  }
}

function renderHighlights() {
  for (var i = 0; i < game.boardCards.length; i++) {}
}

// -----------------------------------------------------------------------

// Draw Submit button

function renderEndTurnBtn() {
  context.fillStyle = "black";
  context.fillRect(CANVASWIDTH-SPRITEWIDTH, CANVASHEIGHT-SPRITEHEIGHT, SPRITEWIDTH, SPRITEHEIGHT);
  context.fillStyle = "white";
  context.font = "30px Arial";
  context.fillText("DONE", CANVASWIDTH - SPRITEWIDTH, CANVASHEIGHT - SPRITEHEIGHT/3);
}

// -----------------------------------------------------------------------

// Global Rendering

function renderGame() {

  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  renderBoard();
  renderHand();
  renderEndTurnBtn();
}