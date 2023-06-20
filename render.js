// -----------------------------------------------------------------------

// Draw individual sprite function (0 blue, 1 red, 2 green, 3 yellow)
function drawSprite(x, y, number, color) {
  context.drawImage(spriteSheet, number * SPRITEPIXELWIDTH, color * SPRITEPIXELHEIGHT + SPRITEPIXELHEIGHT, SPRITEPIXELWIDTH, SPRITEPIXELHEIGHT, x, y, SPRITEWIDTH, SPRITEHEIGHT);
}

// -----------------------------------------------------------------------

// Rendering functions. Cards are considered in hand when not yet dropped. Once dropped, they are considered on board.
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
  context.fillRect(0, CANVASHEIGHT-SPRITEHEIGHT, CANVASWIDTH, SPRITEHEIGHT);
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if(card.dragging) {
      drawSprite(card.posX, card.posY, card.value, card.color);
    }
    else {
      drawSprite(i*SPRITEWIDTH, CANVASHEIGHT-SPRITEHEIGHT, card.value, card.color);
    }
  }
}

function renderGame() {
  renderBoard();
  renderHand();
}

// -----------------------------------------------------------------------