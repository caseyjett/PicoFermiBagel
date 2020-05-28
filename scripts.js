

// //This will generate the random number for the game. 
function getRandom(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min); 

}

//Obviously these will need to go back to (0, 9); 
const randomNum1 = getRandom(1, 1).toString(); //Min should always be 1 for the first digit
const randomNum2 = getRandom(0, 1).toString();
const randomNum3 = getRandom(0, 1).toString();

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');

const guess = document.getElementById('guess'); 

guess.addEventListener('click', () => {
    let pico = []; 
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    if (randomNum1 === num1.value && randomNum2 === num2.value 
        && randomNum3 === num3.value) {
            console.log('Fermi'); 
            li.textContent = "Fermi"; 
            ul.appendChild(li); 
    } else {
        li.textContent = num1.value + num2.value + num3.value; 
            ul.appendChild(li); 
            num1.value = ""; 
            num2.value = ""; 
            num3.value = ""; 

    }   
 }); 

// This code adds the guessed number to the page. 
// guess.addEventListener('click', () => {
//     // need to add my if statements for each value 
//     let ul = document.getElementsByTagName('ul')[0]; 
//     let li = document.createElement('li'); 
//     li.textContent = num1.value + num2.value + num3.value; 
//     ul.appendChild(li); 
//     num1.value = ""; 
//     num2.value = ""; 
//     num3.value = ""; 
// }); 

//Ideas for input: 
//https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit
//https://www.w3schools.com/js/js_validation.asp