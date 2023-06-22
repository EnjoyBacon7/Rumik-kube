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

      </tr>
      <tr id="player1" class="text-center">

      </tr>
      <tr id="player2" class="text-center">

      </tr>
      <tr id="player3" class="text-center">

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

  var colors = ["aqua", "indianred", "lightgreen", "yellow"];

  // Clear the table
  document.getElementById("player0").innerHTML = `<th scope="row" class="border-0"><button onclick="changePlayer(0)" class="btn btn-secondary">Player 0</button></th>`;
  document.getElementById("player1").innerHTML = `<th scope="row" class="border-0"><button onclick="changePlayer(1)" class="btn btn-secondary">Player 1</button></th>`;
  document.getElementById("player2").innerHTML = `<th scope="row" class="border-0"><button onclick="changePlayer(2)" class="btn btn-secondary">Player 2</button></th>`;
  document.getElementById("player3").innerHTML = `<th scope="row" class="border-0"><button onclick="changePlayer(3)" class="btn btn-secondary">Player 3</button></th>`;
  document.getElementById("bugged").innerHTML = `<th scope="row" class="border-0">Bugged</th>`;
  document.getElementById("undrawn").innerHTML = ``;

  // Add the cards to the corresponding player's row (with the right color)
  for (var i = 0; i < game.drawnCards.length; i++) {
    var curCard = game.drawnCards[i];
    var color = colors[curCard.color];
    var number = curCard.value;
    var player = curCard.state;

    if(player != -1) {
      var newtd = document.createElement('td');
      newtd.innerHTML = `${number}`;
      newtd.classList.add("border-0")
      newtd.style.backgroundColor = color;
      var playerRow = document.getElementById(`player${player}`);
      playerRow.appendChild(newtd);
    }
  
  }

  // Add the undrawn cards to the corresponding row (with the right color) (split in rows of 15)
  var undrawnrow = document.createElement("tr");
  undrawnrow.classList.add("text-center");
  undrawnrow.classList.add("border-0");

  for (var i = 0; i < game.undrawnCards.length; i++) {

    if ((i % 15 == 0 && i != 0) || i == game.undrawnCards.length - 1) {
      document.getElementById("undrawn").appendChild(undrawnrow);
      var undrawnrow = document.createElement("tr");
      undrawnrow.classList.add("text-center");
      undrawnrow.classList.add("border-0");
    }

    var curCard = game.undrawnCards[i];
    var color = colors[curCard.color];
    var number = curCard.value;

    var newtd = document.createElement('td');
    newtd.innerHTML = `${number}`;
    newtd.classList.add("border-0")
    newtd.style.backgroundColor = color;

    undrawnrow.appendChild(newtd);
  }

}

// -----------------------------------------------------------------------