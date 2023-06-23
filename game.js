// -----------------------------------------------------------------------

// Dragging functions Variables

var mouseIsDown = false;

// Dragging functions
/// Only possible for the cards in hand
gameCanvas.onmousedown = function(e) {
  mouseIsDown = true;

  // In case of card dragging, we need to find the card that was clicked on
  var draggedCardFound = false;

  for (var i = 0; i < game.drawnCards.length; i++) {
    if(draggedCardFound) { break; }
    var card = game.drawnCards[i];
    if (e.offsetX > card.posX && e.offsetX < card.posX + SPRITEWIDTH && e.offsetY > card.posY && e.offsetY < card.posY + SPRITEHEIGHT && (game.currentPlayer == card.state || card.state == -1)) {
      // If the card that was clicked on was found
      draggedCardFound = true;
      // Set the card to the game's heldCard
      game.heldCard = i;
    }
  }

  // If mouse wasn't on click, set mouseIsDown to false
  if (!draggedCardFound) {
    mouseIsDown = false;
  }

  // In case of clicking on button
  if (e.offsetX > CANVASWIDTH-SPRITEWIDTH && e.offsetX < CANVASWIDTH && e.offsetY > CANVASHEIGHT-SPRITEHEIGHT && e.offsetY < CANVASHEIGHT) {
    console.log("clicked");
  }
}

gameCanvas.onmousemove = function(e) {
  if (mouseIsDown){

    game.drawnCards[game.heldCard].posX = e.offsetX - SPRITEWIDTH/2;
    game.drawnCards[game.heldCard].posY = e.offsetY - SPRITEHEIGHT/2;
    renderGame();
  }
}

gameCanvas.onmouseup = function(e) {

  // If a card was being dragged
  if(mouseIsDown) {
    mouseIsDown = false;
    //check whether the card was on the board or not before being dragged
    if(game.drawnCards[game.heldCard].onBoard) {
      //if it was on the board, make sure it is not dropped in the player's hand
      if(game.drawnCards[game.heldCard].posY >= CANVASHEIGHT - SPRITEHEIGHT*2) {
        game.drawnCards[game.heldCard].posY = CANVASHEIGHT - SPRITEHEIGHT*2;
      }
    }
    else {
      // Check if card is dropped on board
      if (e.offsetX > 0 && e.offsetX < CANVASWIDTH && e.offsetY > 0 && e.offsetY < CANVASHEIGHT-SPRITEHEIGHT) {
        game.drawnCards[game.heldCard].onBoard = true;
        game.drawnCards[game.heldCard].state = -1;
  
        // change coordinates
        game.drawnCards[game.heldCard].posX = e.offsetX - SPRITEWIDTH/2;
        game.drawnCards[game.heldCard].posY = e.offsetY - SPRITEHEIGHT/2;
        
      }
    }
  }
  console.log(game);

  game.heldCard = -1;
  
  debugTable(game);
  renderGame();
}

// -----------------------------------------------------------------------

function changePlayer(player) {
  game.currentPlayer = player;
  renderGame();
}