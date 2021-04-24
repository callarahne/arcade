// const holes = document.querySelectorAll('.hole');
// const scoreBoard = document.querySelector('.score');
// const moles = document.querySelectorAll('.mole');
// let lastHole;
// let timeUp = false;
// let score = 0;

// function randomUp(mole) {
//   const randInt = Math.floor(Math.random() * moles.length);
//   moles[randInt].isUp = true;
// }

// function gameStart() {
//     let scoreBoard = 0;


    
//   }

//   function onMoleClick(){

//   }

// let gameState = {
//     grid: [
//       { 
//         isUp: false,
//         isCivilian: false
//       },
//       // ...
//     ],
//     points: 0,
//   }

//   const moles = [
//       {
//           isUp: false,
//       },
//       {
//           isUp: false,
//       }
//   ];
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0
let hitPosition
let currentTime = 60
let timerId = null

// $('.timer').text(`${DURATION}`);

// $(`.start-game`).click(()=>{
//   startGame();
// })
// const startGame = () => {
//   pauseGame = false;
//   $(`.overlay`).removeClass('active');

// }

// $('.mole').click(function() {
//   if ($(this).hasClass('active')) {
//     score++
//   }
//   $(this).removeClass('active');
//   $('.score').text(Number(score))
// });
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Final Score' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)
