// -----------------------------------------------------------------------

function debug() {

  var debugCard = document.createElement('div');
  debugCard.classList.add("container");
  debugCard.innerHTML = `
    <div id="debugCard" class="card">
      <div class="card-header">
        <h3>Debug Menu</h3>
      </div>
      <table class="table card-body border-0 p-0">
        <thead>
          <tr class="text-center">
            <th scope="col" class="border-0 h3 fw-bold">Player</th>
            <th scope="col" colspan="14" class="border-0 h3 fw-bold">Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr id="player0" class="text-center">
            <th scope="row" class="border-0">Player 0</th>

          </tr>
          <tr id="player1" class="text-center">
            <th scope="row" class="border-0">Player 1</th>

          </tr>
          <tr id="player2" class="text-center">
            <th scope="row" class="border-0">Player 2</th>

          </tr>
          <tr id="player3" class="text-center">
            <th scope="row" class="border-0">Player 3</th>

          </tr>
          <tr id="bugged" class="text-center">
            <th scope="row" class="border-0">Bugged</th>

          </tr>
        </tbody>
      </table>
      <table class="table card-body border-0 p-0">
        <thead>
          <tr class="text-center">
            <th scope="col" colspan="15" class="border-0 h3 fw-bold">Undrawn Cards</th>
          </tr>
        </thead>
        <tbody id="undrawn">
        </tbody>
      </table>
    </div>
  `;
  document.getElementById("debugMenu").appendChild(debugCard);
}

function debugTable(game) {

  // Change color of corresponding cards when player owns it (noting that there are two of each card)
  for (var i = 0; i < game.drawnCards.length; i++) {
    var curCard = game.drawnCards[i];
    var color = colors[curCard.color];
    var number = curCard.value;
    if (document.getElementById(color + number + "_1").style.backgroundColor != "") {
      document.getElementById(color + number + "_2").style.backgroundColor = colors[curCard.state];
    }
    else {
      console.log("hello");
      document.getElementById(color + number + "_1").style.backgroundColor = colors[curCard.state];
    }
  }

}

// -----------------------------------------------------------------------