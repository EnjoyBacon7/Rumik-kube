// Dragging functions
/// Only possible for the cards in hand
gameCanvas.onmousedown = function(e) {
  for (var i = 0; i < game.playerCards[game.currentPlayer].length; i++) {
    var card = game.playerCards[game.currentPlayer][i];
    if (e.offsetX > i*100 && e.offsetX < i*100 + 100 && e.offsetY > 700 && e.offsetY < 800) {
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
      card.posX = e.offsetX - 50;
      card.posY = e.offsetY - 50;
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