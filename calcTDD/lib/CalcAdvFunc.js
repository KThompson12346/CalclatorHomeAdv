//Functions file

// Basic Calculator
function addtionFunc(num1, num2){
  return num1 + num2;
}

function subtractionFunc(num1, num2) {
  return num1 - num2;
}

function multiplyFunc(num1, num2) {
    return num1 * num2;
}

function divisionFunc(num1, num2) {
    return num1 / num2;
}
//} End of basic calculator


//Advanced Calculator
function powerFunc(num1, num2) {
    return Math.pow(num1, num2);
}

function sqrtFunc(num1) {
    return Math.sqrt(num1);
}
// } End of advanced calculator

// BMI Calculator
//Imperial BMI
function imperialBMI(foot, inches, weight) {
  var heightInInches = (foot * 12) + inches;
  var imperialHeight = heightInInches * heightInInches;
  var imperialWeight = weight / imperialHeight;
  var imperialBMI = imperialWeight * 703;
  var bmiResult = imperialBMI.toFixed(2);
  return parseFloat(bmiResult);
}

function metricBMI(height, weight) {
  var metricHeight = height / 100;
  var metricBMI = weight / (metricHeight * metricHeight);
  var metricBmiResult = metricBMI.toFixed(1);
  return parseFloat(metricBmiResult);
}

function tripLengthUnderSixty(distance, fuelEfficiency, costPerGallon, speed) {
  var temp = distance / fuelEfficiency;
  var journeyCost = temp * costPerGallon;
  var result = journeyCost.toFixed(2);
  return parseFloat(result);
}

function journeyTime(distance, speed) {
  var timeOfJourney = distance / speed;
  var result = timeOfJourney.toFixed(2);
  return parseFloat(result);
}

function costOfJourney(costPerGallon, distance, speed, fuelEfficiency) {
  overSixtyMPH = speed - 60;
  overSixtyMPH *= 2;
  var newfuelEfficiency = fuelEfficiency - overSixtyMPH;
  var temp = distance / newfuelEfficiency;
  var costJourney = temp * costPerGallon;
  var result = costJourney.toFixed(2);
  return parseFloat(result);
}

// function tripLengthOverSixty(speed, fuelEfficiency) {
//   var result;
//   var greaterSixty = speed - 60;
//   greaterSixty += 2;
//   var nfuelEfficiency = fuelEfficiency - greaterSixty;
//   result = nfuelEfficiency;
//   return result;
// }
//Underneath here what is happening is that I am calculating how fast/number of miles the user is going, with an indication as to how much they should slow down by.
//   overSixtyMPH = speed - 60;
//   overSixtyMPH *= 2;
//   newfuelEfficiency = fuelEfficiency - overSixtyMPH;
//   if (newfuelEfficiency < fuelEfficiency) {
//       return newFuelEfficiency;
//   }
//     temp = distance / newfuelEfficiency;
//     journeyCost = temp * costPerGallon;
//  }
//  timeOfJourney = distance / speed;
//  alert("The time it will take you is: " + timeOfJourney + " hours" + " and it will cost you £" + journeyCost);
// }

module.exports = {addtionFunc:addtionFunc, subtractionFunc:subtractionFunc, multiplyFunc:multiplyFunc, divisionFunc:divisionFunc, powerFunc:powerFunc, sqrtFunc:sqrtFunc, imperialBMI:imperialBMI, metricBMI:metricBMI, tripLengthUnderSixty:tripLengthUnderSixty,  journeyTime:journeyTime, costOfJourney:costOfJourney}
