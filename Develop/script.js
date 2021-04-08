// Assignment Code
var generateBtn = document.querySelector("#generate");

// The below arrays are split into four variables, unsure if this is the most efficient way to this, appears this is difficult to call upon and concatinate.
var specChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passGen;
var finalPass = [];

//checking length of input arrays creating a parent array with all characters
//console.log(specChars.length); //29
//console.log(alphaLower.length);//26 total length 55
//console.log(alphaUpper.length);//26 total length 81
//console.log(numChar.length);//10 total length 91.....0-90.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var charLength = prompt("How many characters long do you want your password to be? You must choose between 8 and 128");
    if (charLength <= 7 || charLength >= 129) {
      alert("Please enter a correct value!")
      generatePassword();
    } else {
      console.log(charLength);
    };

    passGen = "";
    var userChoiceSpecial = confirm("Do you want special characters in your password?");
    var userChoiceLower = confirm("Do you want lower case letters in your password?");
    var userChoiceUpper = confirm("Do you want capital letters in your password?");
    var userChoiceNumer = confirm("Do you want numbers in your password?");

    //Concatinating arrays to match the user prefence:
    if (userChoiceLower === true && userChoiceUpper === true && userChoiceNumer === true && userChoiceSpecial === true) {
      finalPass = specChar.concat(alphaLower).concat(alphaUpper).concat(numChar);
      console.log(finalPass);
    } else if (userChoiceLower === true && userChoiceUpper === true && userChoiceNumer === true && userChoiceSpecial === false) {
      finalPass = numChar.concat(alphaUpper).concat(alphaLower);
    } else if (userChoiceLower === true && userChoiceUpper === true && userChoiceNumer === false && userChoiceSpecial === true) {
      finalPass = specChar.concat(alphaUpper).concat(alphaLower);
    } else if (userChoiceLower === true && userChoiceUpper === false && userChoiceNumer === true && userChoiceSpecial === true) {
      finalPass = numChar.concat(specChar).concat(alphaLower);
    } else if (userChoiceLower === false && userChoiceUpper === true && userChoiceNumer === true && userChoiceSpecial === true) {
      finalPass = numChar.concat(alphaUpper).concat(specChar);
    } else if (userChoiceLower === true && userChoiceUpper === true && userChoiceNumer === false && userChoiceSpecial === false) {
      finalPass = alphaLower.concat(alphaUpper);
    } else if (userChoiceLower === true && userChoiceUpper === false && userChoiceNumer === true && userChoiceSpecial === false) {
      finalPass = alphaLower.concat(numChar);
    } else if (userChoiceLower === false && userChoiceUpper === true && userChoiceNumer === true && userChoiceSpecial === false) {
      finalPass = numChar.concat(alphaUpper);
    } else if (userChoiceLower === false && userChoiceUpper === true && userChoiceNumer === false && userChoiceSpecial === true) {
      finalPass = alphaLower.concat(alphaUpper);
    } else if (userChoiceLower === true && userChoiceUpper === false && userChoiceNumer === false && userChoiceSpecial === true) {
      finalPass = alphaLower.concat(specChar);
    } else if (userChoiceLower === false && userChoiceUpper === false && userChoiceNumer === true && userChoiceSpecial === true) {
      finalPass = numChar.concat(specChar);
    } else if (userChoiceLower === false && userChoiceUpper === false && userChoiceNumer === false && userChoiceSpecial === true) {
      finalPass = specChar;
    } else if (userChoiceLower === false && userChoiceUpper === false && userChoiceNumer === true && userChoiceSpecial === false) {
      finalPass = numChar;
    } else if (userChoiceLower === false && userChoiceUpper === true && userChoiceNumer === false && userChoiceSpecial === false) {
      finalPass = alphaUpper;
    } else if (userChoiceLower === true && userChoiceUpper === false && userChoiceNumer === false && userChoiceSpecial === false) {
      finalPass = alphaLower;
    } else {
      alert("Please select at least one option!");
      generatePassword();
    };
    var passLength = finalPass.length;
    //Below is the RNG function that is spitting out the characters of the password.
    function passwordRandomizer() {
      passGen = passGen + finalPass[Math.floor(Math.random() * passLength)];
    };

    for (i = 0; i < charLength; i++) {
      passwordRandomizer();
    };
    return passGen;
  };
  finalPass = [];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

