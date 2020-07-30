Pico Fermi Bagel is a numbers game where the computer has a three digit number and then the player tries to guess the correct number. Players are given hints to solve for the correct three digit number. 

The Hints: 
* Pico - a digit is correct and in the correct place
* Fermi - a digit is correct but in the wrong place
* Bagel - None of the digits are part of the correct number

Example Round: Suppose the correct answer is 419 and a player makes the following guesses
* 390 - This would result in 1 Pico because the true solution has a 9, but it's in the wrong spot.
* 308 - This results in a BAGEL because 419 does not include a 3, 0, or 8.
* 279 - This results in 1 Fermi because 9 is in the correct place.
* 149 - This results in 2 Picos and 1 Fermi becuase the 9 is still in the correct place, but both the 1 and the 4 are in the wrong place. 


The optional features that I included to meet Code Louisville Front End Project Requirements: 
- 2 or More Areas areas are arranged with FlexBox
- JavaScript functions with the return value used on the site
- Create and populate a JavaScript array, then retrieve and display one or more values from it
- :nth child CSS  

You shouldn't need to do anything special to run the game. Play on [Github Pages](https://caseyjett.github.io/PicoFermiBagel/)