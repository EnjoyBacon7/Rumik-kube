// Draw sprite function 0 blue, 1 red, 2 green, 3 yellow
function drawSprite(x, y, number, color) {
  context.drawImage(spriteSheet, number * 10, color * 10 + 10, 10, 10, x, y, 100, 100);
}