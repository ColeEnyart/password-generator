// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variable
var numOfCharacters = "";
var specialCharsAllowed = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbersAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseAllowed = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/*
    - Need to know how many characters the password will have
    - Need to know are special characters included
    - Need to know are numbers included
    - Need to know are lower case letters included
    - Need to know are upper case letters included
    - Build final list of possible characters - certain data type?
    - We need a way to store all the possible characters allowed in the password
    - How can we build our password one letter at a time?
        For each character needed, grab a random element from the allowed list
*/

/* choose a length of at least 8 characters and no more than 128 characters */
function askHowManyCharacters(){
  var text = window.prompt("How many characters? (8-128)");

  if( isNaN(text) || text < 8 || text > 128 ) {
    alert("Input must be at valid number between 8 and 128");
    return askHowManyCharacters;
  }
  console.log(text);
  return text
}


console.log(Array.prototype);


function getRandomValue(arr) {
  var result = arr[Math.floor(Math.random() * arr.length)];
  return result;
}

function getSpecial() {
  var special = getRandomValue(specialCharsAllowed)
  return special;
}

function getNumbers() {
  var special = getRandomValue(numbersAllowed)
  return special;
}

function getUpper() {
  var special = getRandomValue(upperCaseAllowed)
  return special;
}

function getLower() {
  var special = getRandomValue(lowerCaseAllowed)
  return special;
}





function generatePassword() {
    var finalPassword = "";
    var numberOfCharacters = askHowManyCharacters();

    return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
