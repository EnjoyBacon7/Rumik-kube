// -----------------------------------------------------------------------

// Disgusting debug function that displays the cards that each player has in their hand
function debug(game) {

  var body = document.getElementsByTagName('body')[0];
  var colors = ["blue", "red", "green", "yellow"];

  var debugDiv = document.createElement('div');
  debugDiv.id = "debugging";
  body.appendChild(debugDiv);

  var table = document.createElement('table');
  debugDiv.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var th = document.createElement('th');
  th.innerHTML = "Blue";
  tr.appendChild(th);

  var th = document.createElement('th');
  th.innerHTML = "Red";
  tr.appendChild(th);

  var th = document.createElement('th');
  th.innerHTML = "Green";
  tr.appendChild(th);

  var th = document.createElement('th');
  th.innerHTML = "Yellow";
  tr.appendChild(th);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (var i = 1; i < 14; i++) {

    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var j = 0; j < 4; j++) {
      var td = document.createElement('td');
      td.id = colors[j] + i + "_1";
      td.innerHTML = i;
      tr.appendChild(td);
    }

    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var j = 0; j < 4; j++) {
      var td = document.createElement('td');
      td.id = colors[j] + i + "_2";
      td.innerHTML = i;
      tr.appendChild(td);
    }
  }

  // Change color of corresponding cards when player owns it (noting that there are two of each card)
  for (var i = 0; i < game.playerCards.length; i++) {
    for (var j = 0; j < game.playerCards[i].length; j++) {
      var color = colors[game.playerCards[i][j].color];
      var number = game.playerCards[i][j].value;
       if (document.getElementById(color + number + "_1").style.backgroundColor != "") {
        document.getElementById(color + number + "_2").style.backgroundColor = colors[i];
       }
       else {
        document.getElementById(color + number + "_1").style.backgroundColor = colors[i];
       }
    }
  }

}

// -----------------------------------------------------------------------
