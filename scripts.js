//No duplicates as of now

// // Note: typeof will reveal randomNum elements as strings and not numbers. 
// //If for some reason as I work this code, I need the types in my array to be numbers, use following code
// //let changeType = randomNum.map(Number); 
// // console.log(typeof changeType[0]); 

// //This will generate the random number for the game. 
function getRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min); 

}

//(1, 999) -- when testing with 0/1s remove excess random numbers and use one string.  
const randomNum1 = getRandom(1, 3).toString(); 
const randomNum2 = getRandom(0, 3).toString();
const randomNum3 = getRandom(0, 3).toString();

let randomArr = [randomNum1, randomNum2, randomNum3]; //this will become randomNum.toString().split("")
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

function pico(a, b) {
    let pico = []; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i -1] || a[i] === b[i - 2] || a[i] === b[i+1] || a[i] === b[i + 2]) {
            pico.push([i]);
        }
    } return pico.length
}

let cat = [2, 4, 7]; 
let dog = [4, 7, 2]; 

console.log(pico(cat, dog))

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
    let newNum = num1r + num2r + num3r; 
    let arr = newNum.split(""); 
    console.log(arr); 

    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
 


    if (!totalFermi(arr, randomArr)) {
        li.textContent = newNum + ` - BAGEL`; 
        ul.appendChild(li);  
    } 

    if (fermi(arr, randomArr) > 0) {
        let numOfFermi = fermi(arr, randomArr);
        li.textContent = newNum + ` -  ${numOfFermi} Fermi`; 
        ul.appendChild(li);
    } 

    if (pico(arr, randomArr) > 0) {
        let numOfPico = pico(arr, randomArr); 
        li.textContent = newNum + ` -  ${numOfPico} Pico`; 
        ul.appendChild(li);
    }

    if (totalFermi(arr, randomArr)) {
        li.textContent = `Total Fermi - YOU WIN!`; 
        ul.appendChild(li);  
    } 
    
    num1.value = ""; 
    num2.value = ""; 
    num3.value = ""; 
}); 

 giveUp.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = `${randomArr.join("")} - Never give up!`; 
    ul.appendChild(li); 
})



//Ideas for input: 
//https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit
//https://www.w3schools.com/js/js_validation.asp
//.insertBefore to fix list order


// let arr = [1, 4, 6, 7]; 
// console.log(`I have ${arr.length} numbers. They are ${arr}`)