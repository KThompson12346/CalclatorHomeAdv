var calcType = prompt("Enter the type of calculator you want to use, enter either 'basic', 'adv' (for powers and square root), 'bmi' and 'trip'")
switch (calcType) {
    case "basic":
    basicCalc();
    break;
    case "adv":
    advCalc();
    break;
    case "bmi":
    bmiCalc();
    break;
    case "trip":
    tripCalc();
    break;
  default:
  prompt("Incorrect input!!")

}

//Basic Calculator
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
      alert("The answer is: " + sqrt);
    }
  }

//BMI Calculator
 function bmiCalc() {
   const IMP_CONV = 703;
   const MULTI_Feet = 12;
   const METRIC_CONV = 100;
   var height;
   var weight;
   var imperialHeight;
   var imperialWeight;
   var imperialBMI;
   var metricHeight;
   var metricBMI;

   var choice = prompt("Choose whether you want use imperial or metric system, enter imperial or metric");

   if (choice == "imperial") {
      var foot = parseInt(prompt("Enter your ft"));
      var inches = parseInt(prompt("enter your inches"));
      height = (foot * MULTI_Feet) + inches;
      weight = parseInt(prompt("what is your weight in pounds?"));
      imperialHeight = height * height;
      imperialWeight = weight / imperialHeight;
      imperialBMI = imperialWeight * IMP_CONV;
      alert("Your BMI in imperial system is: " + imperialBMI);
   } else if (choice == "metric") {
     height = parseInt(prompt("Enter your height in cm"));
     weight = parseInt(prompt("What is your weight in kg"));
     metricHeight = height / METRIC_CONV;
     metricBMI = weight / (metricHeight * metricHeight);
     alert("Your BMI in metric system: " + metricBMI);
   }
 }

//Trip Calculator
function tripCalc() {
  var distance;
  var fuelEfficiency;
  var costPerGallon;
  var speed;
  var overSixtyMPH;
  var journeyCost;
  var timeOfJourney;
  var newfuelEfficiency
  var dist;
  var temp;

  distance = parseFloat(prompt("Enter the distance of your journey km"));
  fuelEfficiency = parseFloat(prompt("Enter the miles per gallon of your vehicle"));
  costPerGallon = parseFloat(prompt("Enter the cost per gallon of your vehicle fuel"));
  speed = parseFloat(prompt("Enter the speed of your vehicle"));

//Calculates cost of journey
  if (speed < 60) {
    temp = distance / fuelEfficiency;
    journeyCost = temp * costPerGallon;
  } else {
  overSixtyMPH = speed - 60;
  overSixtyMPH *= 2;
  newfuelEfficiency = fuelEfficiency - overSixtyMPH;
  if (newfuelEfficiency < fuelEfficiency) {
      alert("I think you should slow down, reduce your speed by " + (overSixtyMPH / 2));
      return;
  }
    temp = distance / newfuelEfficiency;
    journeyCost = temp * costPerGallon;
 }
 timeOfJourney = distance / speed;
 alert("The time it will take you is: " + timeOfJourney + " hours" + " and it will cost you £" + journeyCost);
}
