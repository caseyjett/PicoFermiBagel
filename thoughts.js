// //No duplicates as of now

// // // Note: typeof will reveal randomNum elements as strings and not numbers. 
// // //If for some reason as I work this code, I need the types in my array to be numbers, use following code
// // //let changeType = randomNum.map(Number); 
// // // console.log(typeof changeType[0]); 

// var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;

//     }
//     if (array[0] === '0') {
//         array.shift(); 
//     } 
//     return array;
// }

// // let numDigits = 6; //get from user input

// let randomArr = shuffleArray(numbers).slice(0,3);

// console.log(randomArr); 


// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');
// let num3 = document.getElementById('num3');

// const guess = document.getElementById('guess'); 
// const giveUp = document.getElementById('giveUp'); 

// function totalFermi(a, b) { 
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) return false;
//     }
//     return true;
// }


// function checker(arr) {
//         let testForDupes = arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x)); 
//         return testForDupes ? true : false; 
//     }

// //If length is changeable then these numbers will need to reflect that somehow.
// function pico(a, b) {
//     let pico = []; 
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b[i - 1] || a[i] === b[i - 2] || a[i] === b[i+1] || a[i] === b[i + 2]) {
//             pico.push([i]);
//         }
//     } return pico.length
// }

// function fermi(a, b) {
//     let fermi = []; 
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] === b[i]) {
//           fermi.push([i]); 
//       }
//   } return fermi.length; 
// }

// function bagel(a, b) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) return false;
//     }
//     return true;
// }

// guess.addEventListener('click', () => {
//     let num1r = num1.value;
//     let num2r = num2.value; 
//     let num3r = num3.value; 
//     let newNum = num1r + num2r + num3r; 
//     let arr = newNum.split(""); 
//     console.log(arr); 

//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.createElement('li');
 


//     if (!totalFermi(arr, randomArr)) {
//         li.textContent = newNum + ` - BAGEL`; 
//         ul.appendChild(li);  
//     } 

//     if (fermi(arr, randomArr) > 0 && pico(arr, randomArr) === 0) {
//         let numOfFermi = fermi(arr, randomArr);
//         li.textContent = newNum + ` -  ${numOfFermi} Fermi`; 
//         ul.appendChild(li);
//     } 

//     if (pico(arr, randomArr) > 0 && fermi(arr, randomArr) === 0) {
//         let numOfPico = pico(arr, randomArr); 
//         li.textContent = newNum + ` -  ${numOfPico} Pico`; 
//         ul.appendChild(li);
//     }

//     if (pico(arr, randomArr) > 0 && fermi(arr, randomArr) > 0) {
//         let numOfPico = pico(arr, randomArr); 
//         let numOfFermi = fermi(arr, randomArr);
//         li.textContent = newNum + ` -  ${numOfPico} Pico ${numOfFermi} Fermi`; 
//         ul.appendChild(li);
//     }

//     if (totalFermi(arr, randomArr)) {
//         li.textContent = `${newNum} ${newNum} - YOU WIN! - ${newNum} ${newNum}`; 
//         ul.appendChild(li);  
//     } 

//     if (checker(arr)) {
//         li.textContent = `Hey now - no duplicates`; 
//         ul.appendChild(li); 
//     }
    
//     num1.value = ""; 
//     num2.value = ""; 
//     num3.value = ""; 
// }); 

//  giveUp.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.createElement('li');
//     li.textContent = `${randomArr.join("")} - Never give up!`; 
//     ul.appendChild(li); 
// })



// //Ideas for input: 
// //https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit
// //https://www.w3schools.com/js/js_validation.asp
// //.insertBefore to fix list order




// var container = document.getElementsByClassName("input")[0];
// container.addEventListener('keyup', (event) => {
//     let target = event.target; 
//     let maxLength = parseInt(event.target.attributes["maxlength"].value, 10); 
//     let myLength = event.target.value.length; 
//     if (myLength >= maxLength) {
//         let next = event.target; 
//         while (next = next.nextElementSibling) {
//             if (next == null)
//             break; 
//             if (next.tagName === "input") {
//                 next.focus();
//                 break; 
//             }
//         }
//     }
// })




//this works but is outdated and a little glitchy. See if can be improved
// var container = document.getElementsByClassName("input")[0];
// container.onkeyup = function(e) {
//     // var target = e.srcElement;
//     var maxLength = parseInt(e.target.attributes["maxlength"].value, 10);
//     var myLength = e.target.value.length;
//     if (myLength >= maxLength) {
//         var next = e.target;
//         while (next = next.nextElementSibling) {
//             if (next == null)
//                 break;
//             if (next.tagName.toLowerCase() === "input") {
//                 next.focus();
//                 break;
//             }
//         }
//     }
//     // Move to previous field if empty (user pressed backspace)
//     else if (myLength === 0) {
//         var previous = e.target;
//         while (previous = previous.previousElementSibling) {
//             if (previous == null)
//                 break;
//             if (previous.tagName.toLowerCase() === "input") {
//                 previous.focus();
//                 break;
//             }
//         }
//     }
// }


//khan academy after quiz effect!