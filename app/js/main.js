const GET_TIME = document.querySelector('.timer__time');
let counter = 0;

function widthdrawTime() {
  counter = counter + 5;
  GET_TIME.innerHTML = `${counter}`;

}
setInterval(widthdrawTime, 5000);

const TIME = document.querySelector('.timer');
let distanceLeft = 0 ;
function timerMovement() {
  distanceLeft = distanceLeft + 10;
  TIME.style.marginLeft = `${distanceLeft}px`;
  distanceLeft === 70 ? distanceLeft = 0: '';
  
};
setInterval(timerMovement, 5000);

let styleTime = getComputedStyle(TIME);
console.log(styleTime.color);


// const BODY = document.getElementByTagName('body');
// console.log(BODY);

let map = new Map();

map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
console.log(map);

let map2 = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);
