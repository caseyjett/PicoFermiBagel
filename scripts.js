// Code for the Celebratory Bouncing Balls when game is won. Coded along with https://youtu.be/hoWjnidQOms but I did have to figure out how to connect it to the game that I created.

const Ball = function(x, y, radius) {
    this.x = x;
    this.y = y; 
    this.radius = radius; 
    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    this.direction = Math.random() * Math.PI * 2; 
    this.speed = Math.random() * 4 + 1; 
}

Ball.prototype = {
    updatePosition:function(width, height) {
        this.x += Math.cos(this.direction) * this.speed; 
        this.y +=Math.sin(this.direction) * this.speed;

        if (this.x - this.radius < 0) {
            this.x = this.radius; 

            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)* -1);
        } else if (this.x + this.radius > width) {
            this.x = width - this.radius; 

            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)* -1);
        }

        if (this.y - this.radius < 0) {
            this.y = this.radius; 

            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        } else if (this.y + this.radius > height) {
            this.y = height - this.radius; 

            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        }
    }
}

var balls = new Array(); 
let x = document.documentElement.clientWidth * 0.5; 
let y = document.documentElement.clientHeight * 0.5; 

for (let index = 0; index <50; index ++) {
    balls.push(new Ball(x, y, Math.random() * 20 + 10))
} 

function loop() {
    let context = document.querySelector("canvas").getContext("2d"); 
    window.requestAnimationFrame(loop);

    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    context.canvas.width = width;
    context.canvas.height = height; 

    for (let index = 0; index <balls.length; index ++) {
        let ball = balls[index]; 

        context.fillStyle = ball.color; 
        context.beginPath(); 
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); 
        context.fill(); 

        ball.updatePosition(width, height); 
    } 
}

// ------ Variables For Game Play----------------------------
let numbers = ['0','1','2','3','4','5','6','7','8','9'];

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');

// let numDigits = 6; //get from user input and change variable below to .slice(0, numDigits)
let randomArr = shuffleArray(numbers).slice(0,3);

const guess = document.getElementById('guess'); 
const giveUp = document.getElementById('giveUp'); 

//------- FUNCTIONS For Game Play-----------------------------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    if (array[0] === '0') {
        array.shift(); 
    } 
    return array;
}

console.log(randomArr); 

function checkForEmptyDigits(arr) {
    return (arr.length < 3); 
    }

function checkForLeadingZero(arr) {
    return (arr[0] === "0"); 
}

function checkForTotalFermi(a, b) { 
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

//If length is changeable then these numbers will need to reflect that somehow.
function checkForPico(a, b) {
    let pico = 0; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i - 1] || a[i] === b[i - 2] || a[i] === b[i+1] || a[i] === b[i + 2]) {
            pico++; 
        }
    } return pico; 
}

function checkForFermi(a, b) {
    let fermi = 0; 
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
          fermi++; 
      }
  } return fermi; 
}

function checkForRepeatingDigits(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x)); 
}

// ---------- BEHAVIORS --------------------

guess.addEventListener('click', () => {
    let num1r = num1.value;
    let num2r = num2.value; 
    let num3r = num3.value; 
    let newNum = num1r + num2r + num3r; 
    let arr = newNum.split(""); 
    console.log(arr); 

    let ul = document.getElementsByClassName('guesses')[0];
    let li = document.createElement('li');

    if (!checkForTotalFermi(arr, randomArr)) {
        li.textContent = newNum + ` - BAGEL`; 
        ul.appendChild(li);  
    } 

    if (checkForFermi(arr, randomArr) > 0 && checkForPico(arr, randomArr) === 0) {
        let numOfFermi = checkForFermi(arr, randomArr);
        li.textContent = `${newNum} - ${numOfFermi} Fermi`; 
        ul.appendChild(li);
    } 

    if (checkForPico(arr, randomArr) > 0 && checkForFermi(arr, randomArr) === 0) {
        let numOfPico = checkForPico(arr, randomArr); 
        li.textContent = `${newNum} - ${numOfPico} Pico`; 
        ul.appendChild(li);
    }

    if (checkForPico(arr, randomArr) > 0 && checkForFermi(arr, randomArr) > 0) {
        let numOfPico = checkForPico(arr, randomArr); 
        let numOfFermi = checkForFermi(arr, randomArr);
        li.textContent = `${newNum} - ${numOfPico} Pico ${numOfFermi} Fermi`; 
        ul.appendChild(li);
    }

    if (checkForTotalFermi(arr, randomArr)) {
        li.textContent = `${newNum} - YOU WIN! - ${newNum}`; ; 
        ul.appendChild(li).id = "emphasizeItem";  

        let drawCanvas = document.createElement('canvas')
        let bodyElement = document.getElementsByClassName('body')[0]; 
        let firstElement = document.getElementsByTagName('header')[0]; 

        bodyElement.insertBefore(drawCanvas, firstElement);
        loop(); 
        
    } 

    if (checkForRepeatingDigits(arr)) {
        li.textContent = `${newNum} - No repeating digits`; 
        ul.appendChild(li); 
    }

    //If game play expands from 3 digits, need to change number below. 
    if (checkForLeadingZero(arr)) {
        li.textContent = `${newNum} - Three digit numbers don't begin with zero!`; 
        ul.appendChild(li); 
    } 

    if (checkForEmptyDigits(arr)) {
        li.textContent = `${newNum} - Whoops, you forgot one or more digits`; 
        ul.appendChild(li).id = "noID"; 
    } 
    
    num1.value = ""; 
    num2.value = ""; 
    num3.value = ""; 
}); 

 giveUp.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[1];
    let li = document.createElement('li');
    li.textContent = `${randomArr.join("")} - Never give up!`; 
    ul.appendChild(li).id = "emphasizeItem"; 
})



//Ideas for input: 
//https://www.w3schools.com/js/js_validation.asp



 