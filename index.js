// // Basic Calculator
function basicCalc() {
var num1;
var num2;
var operator;

num1 = parseInt(prompt("Please enter your first number"));

num2 = parseInt(prompt("Now enter your second number"));

operator = prompt("Now enter the operation you would like to perform");

if (operator == "+") {
  operator = num1 + num2;
}
else if (operator == "-") {
    operator = num1 - num2;
}
else if (operator == "*") {
    operator = num1 * num2;
}
else if (operator == "/") {
    operator = num1 / num2;
}
alert("Your answer is " + operator);
}

//Advanced Calculator
function advCalc() {
  var num1;
  var num2;
  var power;
  var sqrt;
  var option = prompt("Enter which operation you would like done, 'power' or 'sqrt'");
  if (option == "power") {
    num1 = parseInt(prompt("Enter the number you would like to raise to a power"));
    num2 = parseInt(prompt("Now enter a number to raise your first number by"));
    power = Math.pow(num1, num2);
    prompt("the result is: " + power);
  }
    else if (option == "sqrt") {
      num1 = parseInt(prompt("Enter a number you want to find the square root of"));
      sqrt = Math.sqrt(num1);
      prompt("The answer is: " + sqrt);
    }
  }
