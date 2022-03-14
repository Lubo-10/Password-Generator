// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters!");
    return;
  }
  if (passwordLength > 128) {
    alert("Password must be less than 128 characters!");
    return;
  }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");
  
};

var specialChar = "!@#$%^&*(){}[]:;<,>.?/"
var lowercaseChar = "qwertyuiopasdfghjklzxcvbnm"
var uppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numberChar = "0123456789"
