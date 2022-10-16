//------------------------------------------------

var firstNum = prompt("Enter 1st number: ");
var secondNum = prompt("Enter 2nd number: ");
var theNumbersMatch;
var message;

if ( firstNum == secondNum ) {
    theNumbersMatch = true;
    message="The numbers " + firstNum + " and " + secondNum + " match!";
} else {
    theNumbersMatch = false;
    message="The numbers " + firstNum + " and " + secondNum + " do not match!!";
}

console.log(theNumbersMatch);
alert(message);
