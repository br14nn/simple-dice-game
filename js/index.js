var dice_img = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var player_1_score = Math.floor(Math.random() * dice_img.length);
var player_2_score = Math.floor(Math.random() * dice_img.length);

document.querySelector("#player_1_score").setAttribute("src", dice_img[player_1_score]);
document.querySelector("#player_2_score").setAttribute("src", dice_img[player_2_score]);

var winner_player = document.querySelector("#winner_player");

if (player_1_score === player_2_score) {
  winner_player.innerHTML = "<em><strong>Draw</strong></em>";
} else if (player_1_score > player_2_score) {
  winner_player.innerHTML = "<em><Strong>Player 1 Wins!</strong></em>";
} else {
  winner_player.innerHTML = "<em><strong>Player 2 Wins!</strong></em>";
}
