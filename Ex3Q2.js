//------------------------------------------------

//-------------Declaration of Variables-------------

let string;
let delimiter;
var myArray;
var result;

//-------------Declaration of Function [START]-------------

//-----This function prompts the user to enter the string of numbers to reverse and the delimiter to use-----

function getUserInputs() {
    string = prompt("Enter string to reverse: ");
    delimiter = prompt("Enter a delimiter: ");
}

//-----This function accepts two arguments reverse the characters of the argument, returns the result of the reverse function and seperated by the delimiter-----

function reverseAnything() {
    myArray = string.split("");
    myArray.reverse();   
    result = myArray.join(delimiter);
}

//-----This function returns the details of user input and shows the reverse function that includes the delimiter which seperates each character-----

function printMessage(){
    var message="You have entered: "+"\n";
    message +="String: "+"'" +string+ "'"+"\n";
    message +="Delimiter: "+"'" +delimiter+ "'"+"\n\n";
    message +="The returned result is: "+"'" +result+ "'";
    alert(message);
}

//-------------Declaration of Function [END]-------------

//-------------Main Program-------------

getUserInputs();
reverseAnything();
printMessage();