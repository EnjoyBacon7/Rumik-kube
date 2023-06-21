// -----------------------------------------------------------------------

// Dragging functions Variables

var mouseIsDown = false;

// Dragging functions
/// Only possible for the cards in hand
gameCanvas.onmousedown = function(e) {
  mouseIsDown = true;
  var draggedCardFound = false;

  for (var i = 0; i < game.drawnCards.length; i++) {
    if(draggedCardFound) { break; }
    var card = game.drawnCards[i];
    if (e.offsetX > card.posX && e.offsetX < card.posX + SPRITEWIDTH && e.offsetY > card.posY && e.offsetY < card.posY + SPRITEHEIGHT) {
      // If the card that was clicked on was found
      console.log("mouse down");
      draggedCardFound = true;
      // Set the card to the game's heldCard
      game.heldCard = i;
    }
  }
}

gameCanvas.onmousemove = function(e) {
  if (mouseIsDown){

    game.drawnCards[game.heldCard].posX = e.offsetX - SPRITEWIDTH/2;
    game.drawnCards[game.heldCard].posY = e.offsetY - SPRITEHEIGHT/2;
    console.log("moving");
    renderGame();
  }
}

gameCanvas.onmouseup = function(e) {
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
      game.heldCard.onBoard = true;
      game.boardCards.push([game.heldCard]);


      // change coordinates
      game.boardCards[game.boardCards.length-1][0].posX = e.offsetX - SPRITEWIDTH/2;
      game.boardCards[game.boardCards.length-1][0].posY = e.offsetY - SPRITEHEIGHT/2;
      
      console.log(game.boardCards[game.boardCards.length-1][0].posX = e.offsetX - SPRITEWIDTH/2, game.boardCards[game.boardCards.length-1][0].posY = e.offsetY - SPRITEHEIGHT/2);
      updateDebug();
    }
  }

  game.heldCard = null;
  
  console.log("mouse up");
  renderGame();
}

// -----------------------------------------------------------------------