// -----------------------------------------------------------------------

// Draw individual sprite function (0 blue, 1 red, 2 green, 3 yellow)
function drawSprite(x, y, number, color) {
  context.drawImage(spriteSheet, number * 10, color * 10 + 10, 10, 10, x, y, 100, 100);
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
  context.fillRect(0, 700, 2000, 100);
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if(card.dragging) {
      drawSprite(card.posX, card.posY, card.value, card.color);
    }
    else {
      drawSprite(i*100, 700, card.value, card.color);
    }
  }
}

// -----------------------------------------------------------------------