//-------------------------------------------------- 

//-------------Declaration of Variables-------------

var hoursWorked = 0;
var rate = 0;
var salary = 0;
var transport = 40;
var msg1;
var message = "Your salary is: $";

//-------------Declaration of Function [START]-------------

//-----This function prompts the user to enter the no. of hours worked and hourly rate which will then be stored to the variables hoursWorked and rate respectively-----

function getUserInputs() {
    hoursWorked = prompt("Enter the no. of hours worked: ");
    rate = prompt("Enter the hourly rate: ");
}

//-----This function returns the details the user has input and shows the exact amount they are entitled with-----

function printMessage() {
    msg1 = "You have entered: \n========================\n";
    msg1 += "Hours worked: " +hoursWorked+ "\n";
    msg1 += "Rate: $" +rate+ "\n\n";
    
    salary = hoursWorked * rate;       
}

//-----This function checks the salary and adds the transport benefit of $40 if the salary is below $300-----

function checkSalary() {
if (salary < 300){
    salary = salary + transport;
    message = message + salary +" (with transport benefits of $"+transport+")";
} else {
    message = message + salary;

}

alert(msg1 + message);

}

//-------------Declaration of Function [END]-------------

//-------------Main Program-------------

getUserInputs();
printMessage();
checkSalary();