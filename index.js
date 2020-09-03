var random_one = Math.floor(Math.random() * (6) + 1)
var random_two = Math.floor(Math.random() * (6) + 1)

var image_one = 'images/dice' + random_one + '.png'
var image_two = 'images/dice' + random_two + '.png'

document.querySelectorAll('img')[0].setAttribute('src', image_one)
document.querySelectorAll('img')[1].setAttribute('src', image_two)

if (random_one > random_two) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins.'
}
else if (random_one < random_two) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins.'
}
else if (random_one === random_two) {
  document.querySelector('h1').innerHTML = 'Its a Tie!.'
}
