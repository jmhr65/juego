var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the aliens
  for (var i = 0; i < aliens.length; i++) {
    var alien = aliens[i];
    ctx.fillStyle = alien.color;
    ctx.fillRect(alien.x, alien.y, alien.width, alien.height);
  }

  // Draw the player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Update the game state
  update();

  // Request a redraw
  requestAnimationFrame(draw);
}

function update() {
  // Move the aliens
  for (var i = 0; i < aliens.length; i++) {
    var alien = aliens[i];
    alien.x += alien.velocity.x;
    alien.y += alien.velocity.y;

    if (alien.x < 0 || alien.x > canvas.width) {
      alien.velocity.x *= -1;
    }

    if (alien.y < 0 || alien.y > canvas.height) {
      alien.velocity.y *= -1;
    }
  }

  // Check for collisions
  for (var i = 0; i < aliens.length; i++) {
    var alien = aliens[i];
    if (alien.intersects(player)) {
      // Game over!
      alert("Game over!");
      window.location.reload();
    }
  }
}

// Initialize the game
draw();