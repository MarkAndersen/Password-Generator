// Assignment Code
var generateBtn = document.querySelector("#generate");

// The below arrays are split into four variables, unsure if this is the most efficient way to this, appears this is difficult to call upon and concatinate.
// var specChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
// var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];

var randPassGen = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
    var passLength = prompt("How many characters long do you want your password to be? You must choose between 8 and 128");
    if (passLength <= 7 || passLength >= 129) {
      alert("Please enter a correct value!")
      generatePassword();
    } else {
      console.log(passLength);
    };
    //TODO: Create while loop to iterate until password length reached.
    //Below is the RNG function that is spitting out the characters of the password.
    function passwordRandomizer() {
      var passGen = randPassGen[Math.floor(Math.random() * 91)];
      console.log(passGen);
     };
    // Write password to the #password input
    for (i=0; i <= passLength; i++) {
      passwordRandomizer();
    }; 
  };
  // var userChoiceLower = confirm("Do you want lower case letters in your password?");
  // var userChoiceUpper = confirm("Do you want capital letters in your password?");
  // var userChoiceNumer = confirm("Do you want numbers in your password?");
  // var userChoiceSpecial = confirm("Do you want special characters in your password?");
  //   console.log(userChoiceLower);
  //   console.log(userChoiceUpper);
  //   console.log(userChoiceNumer);
  //   console.log(userChoiceSpecial); 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

