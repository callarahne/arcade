const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomUp(mole) {
  const randInt = Math.floor(Math.random() * moles.length);
  moles[randInt].isUp = true;
}

function gameStart() {
    let scoreBoard = 0;


    
  }

  function onMoleClick(){

  }

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