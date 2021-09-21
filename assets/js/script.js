// Assignment Code
var generateBtn = document.querySelector("#generate");

// asks user what length the password should be and validates if input is a number
function askHowManyCharacters() {
  var
    text = window.prompt("How many characters do you want in your password? (8-128)"),        // ask user for input
    number = parseInt(text, 10);                                                              // attempt to convert input into a number, radix 10 select (0-9)

  if (isNaN(number) || number < 8 || number > 128) {                                          // if not valid input
    alert("Input must be at valid number between 8 and 128");                                 // tell user what is a valid input
    return askHowManyCharacters();                                                            // ask user for input again
  }
  console.log(number);
  return number;                                                                              // return valid input
}

// asks user character set criteria to be chosen
function askWhichCharacters() {
  var
    specialCharsAllowed = window.confirm("Do you want special characters in your password?"), // ask user if special characters should be included
    numbersAllowed = window.confirm("Do you want numbers in your password?"),                 // ask user if numerical characters should be included
    lowercaseAllowed = window.confirm("Do you want lowercase letters in your password?"),     // ask user if lowercase characters should be included
    uppercaseAllowed = window.confirm("Do you want uppercase letters in your password?");     // ask user if uppercase characters should be included

  var                                                                                         // start with an empty character set
    special = "",
    number = "",
    lower = "",
    upper = "";

  if (specialCharsAllowed) {                                                                  // if user selects special characters (true)
    special = "!@#$^&%*()+=-[]{}|:<>?,.";                                                     // set special to include all special characters
  }
  console.log(special.split(""));

  if (numbersAllowed) {                                                                       // if user selects numerical characters (true)
    number = "1234567890";                                                                    // set number to include all numbers
  }
  console.log(number.split(""));

  if (lowercaseAllowed) {                                                                     // if user selects lowercase characters (true)
    lower = "abcdefghijklmnopqrstuvwxyz";                                                     // set lower to include all lowercase characters
  }
  console.log(lower.split(""));

  if (uppercaseAllowed) {                                                                     // if user selects uppercase characters (true)
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";                                                     // set upper to include all uppercase characters
  }
  console.log(upper.split(""));

  if (specialCharsAllowed + numbersAllowed + lowercaseAllowed + uppercaseAllowed === 0) {     // if user selects (false) for all characters
    alert("At least one character type must be selected");                                    // tell user what is a valid input
    return askWhichCharacters();                                                              // ask user for input again
  }

  criteria = special + number + lower + upper;                                                // combine the selected character sets
  console.log(criteria.split(""));
  return criteria;                                                                            // return combined character sets selected
}

// generates password based upon criteria chosen by user
function generatePassword() {
  var
    finalPassword = "",                                                                       // start with an empty password
    length = askHowManyCharacters(),                                                          // ask user for length of password to generate
    characters = askWhichCharacters();                                                        // ask user for what characters to use for password

  for (var i = 0; i < length; i++) {                                                          // add one random character for each character asked for
    finalPassword += characters[Math.floor(Math.random() * characters.length)];               // add one random character to end of password
  }

  return finalPassword;                                                                       // return sequence of random characters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
