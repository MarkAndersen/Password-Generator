// Assignment Code
var generateBtn = document.querySelector("#generate");

// The below arrays are split into four variables, unsure if this is the most efficient way to this. can probably store this as strings and split later.
var specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passGen;
var finalPass = [];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    finalPass = [];
    var charLength = prompt("How many characters long do you want your password to be? You must choose between 8 and 128");
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Please enter a correct value!")
      return "";
    };

    passGen = "";
    var userChoiceSpecial = confirm("Do you want special characters in your password?");
    var userChoiceLower = confirm("Do you want lower case letters in your password?");
    var userChoiceUpper = confirm("Do you want capital letters in your password?");
    var userChoiceNumer = confirm("Do you want numbers in your password?");

    //Concatinating arrays to match the user prefence, had this check all 16 conditions before instead of simply 5:
      if (userChoiceSpecial == true) {
        finalPass = finalPass.concat(specChar);
      };
      if (userChoiceLower == true) {
        finalPass = finalPass.concat(alphaLower);
      };
      if (userChoiceUpper == true) {
        finalPass = finalPass.concat(alphaUpper);
      };
      if (userChoiceNumer == true) {
        finalPass = finalPass.concat(numChar);
      };
      if (userChoiceSpecial == false && userChoiceLower == false && userChoiceUpper == false && userChoiceNumer == false) {
      alert("Please select at least one option!");
      return "";
    };
    //Below is the RNG function that is spitting out the characters of the password.
    function passwordRandomizer() {
      passGen = passGen + finalPass[Math.floor(Math.random() * finalPass.length)];
    };
    //the loop generating the password based on character length and chosen preferences.
    for (i = 0; i < charLength; i++) {
      passwordRandomizer();
    };
    return passGen;
  };
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
