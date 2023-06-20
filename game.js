// -----------------------------------------------------------------------

// Dragging functions
/// Only possible for the cards in hand
gameCanvas.onmousedown = function(e) {
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    // For cards in hand
    if (e.offsetX > i*SPRITEWIDTH && e.offsetX < i*SPRITEWIDTH + SPRITEWIDTH && e.offsetY > CANVASHEIGHT-SPRITEHEIGHT && e.offsetY < CANVASHEIGHT) {
      card.dragging = true;
      console.log("dragging");
    }
  }
  for (var i = 0; i < game.boardCards.length; i++) {
    var card = game.boardCards[i][0];
    // For cards on board
    if (e.offsetX > card.posX && e.offsetX < card.posX + SPRITEWIDTH && e.offsetY > card.posY && e.offsetY < card.posY + SPRITEHEIGHT) {
      card.dragging = true;
      console.log("dragging");
    }
  }
}

gameCanvas.onmousemove = function(e) {
  context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    // For cards in hand
    var card = game.playerCards[game.currentPlayer][i];
    if (card.dragging) {
      card.posX = e.offsetX - SPRITEWIDTH/2;
      card.posY = e.offsetY - SPRITEHEIGHT/2;
    }
  }

  for (var i = 0; i < game.boardCards.length; i++) {
    // For cards on board
    var card = game.boardCards[i][0];
    if (card.dragging) {
      card.posX = e.offsetX - SPRITEWIDTH/2;
      card.posY = e.offsetY - SPRITEHEIGHT/2;
    }
  }

  renderGame();
}

gameCanvas.onmouseup = function(e) {
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if (card.dragging) {

      // Check if card is dropped on board
      if (e.offsetX > 0 && e.offsetX < CANVASWIDTH && e.offsetY > 0 && e.offsetY < CANVASHEIGHT-SPRITEHEIGHT) {
        card.onBoard = true;
        game.boardCards.push([card]);
        game.playerCards[game.currentPlayer].splice(i, 1);

        // change coordinates
        game.boardCards[game.boardCards.length-1][0].posX = e.offsetX - SPRITEWIDTH/2;
        game.boardCards[game.boardCards.length-1][0].posY = e.offsetY - SPRITEHEIGHT/2;
        
        console.log(game.boardCards[game.boardCards.length-1][0].posX = e.offsetX - SPRITEWIDTH/2, game.boardCards[game.boardCards.length-1][0].posY = e.offsetY - SPRITEHEIGHT/2);
        updateDebug();
      }

      card.dragging = false;
      console.log("stopped dragging");
      renderGame();
    }
  }
}

// -----------------------------------------------------------------------