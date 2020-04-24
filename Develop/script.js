// Assignment Code
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
var passwordCharacters = [];

function generatePassword() {

  // Prompt for passwordLength is displayed. The conditions for minimuam and maximum length are established and will fail if a 
  // non integer number not between 8 and 128 is put in. If conditions aren't met, there will be another prompt asking to use only 
  // numbers between 8 and 128.
  
  var passwordLength = prompt("Enter a password length between 8 and 128 characters.");
  while (!parseInt(passwordLength) || parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8) {
    passwordLength = prompt("Please only use numbers between 8 & 128");
  }
  // Prompt for passwordNumeric is displayed. The user must select y or n. If these conditions aren't met, 
  //then it fails and prompts user to use y or n.   
  var passwordNumeric = prompt("Would you like your password to include numbers? (y/n)")
  while (passwordNumeric !== 'n' && passwordNumeric !== 'y') {
    passwordNumeric = prompt('Please only use y or n');
  }
  // Prompt for passwordLowercase is displayed. The user must select y or n. If these conditions aren't met, 
  //then it fails and prompts user to use y or n.   
  var passwordLowercase = prompt("Would you like your password to include lowercase characters? (y/n)")
  while (passwordLowercase !== 'n' && passwordLowercase !== 'y') {
    passwordLowercase = prompt('Please only use y or n');
  }

  // Prompt for passwordUppercase is displayed. The user must select y or n. If these conditions aren't met, 
  //then it fails and prompts user to use y or n.
  var passwordUppercase = prompt("Would you like your password to include uppercase characters? (y/n) ")
  while (passwordUppercase !== 'n' && passwordUppercase !== 'y') {
    passwordUppercase = prompt('Please only use y or n');
  }

  // Prompt for passwordSpecialCharacters is displayed. The user must select y or n. If these conditions aren't met, 
  //then it fails and prompts user to use y or n.
  var passwordSpecialCharacters = prompt("Would you like your password to include special characters? (y/n)")
  while (passwordSpecialCharacters !== 'n' && passwordSpecialCharacters !== 'y') {
    passwordSpecialCharacters = prompt('Please only use y or n');
  }
  // If the user selects y for numbers, lowercase, uppercase, and or special characters. The corresponding arrays of each variable are used
  // and can be used together using the concat method.
  
  if (passwordNumeric === "y") {
    passwordCharacters = passwordCharacters.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
  }
  
  if (passwordLowercase === "y") {
    passwordCharacters = passwordCharacters.concat(["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"])
  } 

  if (passwordUppercase === "y"){
    passwordCharacters = passwordCharacters.concat(["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"])

  }

  if (passwordSpecialCharacters === "y") {
    passwordCharacters = passwordCharacters.concat(['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^","_", "`", "{", "|", "}", "~"])
  }
  // If the user selects n for all prompts, then the program starts from the beginning.If not a for loop is used to generate the random password.
  if (passwordNumeric== "n" && passwordLowercase === "n" && passwordUppercase === "n" && passwordSpecialCharacters === "n") {
    generatePassword();
  } else {
    var password = "";
    for( var i=0; i<passwordLength; i++){
      var num = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[num];
    }
  
    passwordText.value = password;
  }



}


generateBtn.addEventListener("click", generatePassword);
