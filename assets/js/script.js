// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variable


/* choose a length of at least 8 characters and no more than 128 characters */
function askHowManyCharacters(){
  var text = window.prompt ("How many characters do you want in your password? (8-128)"),
      number = parseInt(text, 10);

  if( isNaN(number) || number < 8 || number > 128 ) {
    alert("Input must be at valid number between 8 and 128");
    return askHowManyCharacters();
  }
  console.log(number);
  return number;
}

function askWhichCharacters() {
  var specialCharsAllowed = window.confirm ("Do you want special characters in your password?"),
      numbersAllowed = window.confirm ("Do you want numbers in your password?"),
      lowercaseAllowed = window.confirm ("Do you want lowercase letters in your password?"),
      uppercaseAllowed = window.confirm ("Do you want uppercase letters in your password?");
  
  var special = "",
      number = "",
      lower = "",
      upper = "";

  if (specialCharsAllowed) {
    special = "!@#$^&%*()+=-[]{}|:<>?,.";
    console.log(special);
  }
  if (numbersAllowed) {
    number = "1234567890";
    console.log(number);
  }
  if (lowercaseAllowed) {
    lower = "abcdefghijklmnopqrstuvwxyz";
    console.log(lower);
  }
  if (uppercaseAllowed) {
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(upper);
  }

  if (specialCharsAllowed + numbersAllowed + lowercaseAllowed + uppercaseAllowed === 0) {
    alert("At least one character type must be selected");
    return askWhichCharacters();
  }

  criteria = special + number + lower + upper;
  console.log(criteria.split(""));
  return criteria;
}

function generatePassword() {
    var 
      finalPassword = "",
      length = askHowManyCharacters(),
      characters = askWhichCharacters();

    for (var i = 0; i < length; i++) {
      finalPassword += characters[Math.floor(Math.random() * characters.length)];;
    }

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
