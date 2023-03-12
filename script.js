// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Creates password
function generatePassword() {
  //Created variables for character options 
  var password = "";
  var lowercase= "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var allChars = "";
//confirms whether or not the character type is needed
  var useLowercase = confirm("Would you like to use lowercase letters?");
  var useUppercase = confirm("Would you like to use capital letters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSymbols = confirm("Would you like to use special characters?");

  var maxLength = 128;
  var minLength = 8;

//adds character type if true
  if (useLowercase) {
    allChars += lowercase;
  }
  if (useUppercase) {
    allChars += uppercase;
  }
  if (useNumbers) {
    allChars += numbers;
  }
  if (useSymbols) {
    allChars += symbols;
  }
//prompts user for a number and changes string to a number
  var passwordLength= parseInt(prompt("How long would you like your password to be"));

  if (passwordLength < minLength) {
    // If the entered length is less than the min, set to min
    passwordLength = minLength; 
    //If the entered length is greater than the max, set to max
  } else if (passwordLength > maxLength) {
    passwordLength = maxLength;
  }

//loops for length of password with desired characters within min and max range
  for (var i = 0; i < passwordLength; i++) {
    var randomCharLength = Math.floor(Math.random() * allChars.length);
    password += allChars[randomCharLength];
  }
//password call
  return password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

