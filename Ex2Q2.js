//------------------------------------------------

var hoursWorked = prompt("Please enter the hours worked: ");
var rate = prompt("Please enter the rate: ");
var transport = 40;
var salary = hoursWorked * rate;

if (salary <= 500) {
    salary = salary + transport;

var message = "You have entered: \n===========================\n";
message = message + "Hours worked: " + hoursWorked +"\n";
message += "Rate: $" + rate +"\n\n\n";
message += "Your salary is: $" + salary + " (with transport benefits of $40)";

console.log(message);
alert(message);

} else {
    salary = hoursWorked * rate;

var message = "You have entered: \n===========================\n";
message = message + "Hours worked: " + hoursWorked +"\n";
message += "Rate: $" + rate +"\n\n\n";
message += "Your salary is: $" + salary;

console.log(message);
alert(message);
}
 
