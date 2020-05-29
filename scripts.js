

// //This will generate the random number for the game. 
function getRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min); 

}

//Obviously these will need to go back to (0, 9); 
const randomNum1 = getRandom(1, 1).toString(); //Min should always be 1 for the first digit
const randomNum2 = getRandom(0, 1).toString();
const randomNum3 = getRandom(0, 1).toString();

let randomArr = [randomNum1, randomNum2, randomNum3]; 
console.log(randomArr); 

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');

const guess = document.getElementById('guess'); 
const giveUp = document.getElementById('giveUp'); 

function totalFermi(a, b) { 
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function fermi(a, b) {
      let fermi = []; 
      for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            fermi.push([i]); 
        }
    } return fermi.length; 
}

function bagel(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

guess.addEventListener('click', () => {
    let num1r = num1.value;
    let num2r = num2.value; 
    let num3r = num3.value; 
    let nums = num1r + num2r + num3r; 
    
    let newNum = num1r + num2r + num3r; 
    let arr = newNum.split(""); 
    console.log(arr); 

    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
 
    if (totalFermi(arr, randomArr)) {
        li.textContent = `Total Fermi - YOU WIN!`; 
        ul.appendChild(li);  
    } 

    if (!totalFermi(arr, randomArr)) {
        li.textContent = nums + ` - BAGEL`; 
        ul.appendChild(li);  
    } 

    if (fermi(arr, randomArr) > 0 && fermi(arr, randomArr) < 3) {
        let numOfFermi = fermi(arr, randomArr);
        li.textContent = nums + ` -  ${numOfFermi} Fermi`; 
        ul.appendChild(li);
    } 
    
    num1.value = ""; 
    num2.value = ""; 
    num3.value = ""; 
}); 

 giveUp.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = `${randomArr.join("")} - Never give up!`; //instead of console.logging this add it to the document
    ul.appendChild(li); 
})

//Ideas for input: 
//https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit
//https://www.w3schools.com/js/js_validation.asp