// -----------------------------------------------------------------------

// Dragging functions
/// Only possible for the cards in hand
gameCanvas.onmousedown = function(e) {
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if (e.offsetX > i*SPRITEWIDTH && e.offsetX < i*SPRITEWIDTH + SPRITEWIDTH && e.offsetY > CANVASHEIGHT-SPRITEHEIGHT && e.offsetY < CANVASHEIGHT) {
      card.dragging = true;
      console.log("dragging");
    }
  }
}

gameCanvas.onmousemove = function(e) {
  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if (card.dragging) {
      card.posX = e.offsetX - SPRITEWIDTH/2;
      card.posY = e.offsetY - SPRITEHEIGHT/2;
    }
  }

  console.log(e.offsetX, e.offsetY);

  renderHand();
}

gameCanvas.onmouseup = function(e) {
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if (card.dragging) {
      card.dragging = false;
      console.log("stopped dragging");
    }
  }
}

// -----------------------------------------------------------------------