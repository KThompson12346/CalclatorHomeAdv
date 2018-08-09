// TDD Tests
describe("Testing the functions of my calculator coursework", function() {

  var calculator = require("../lib/CalcAdvFunc.js");

  it("Should add two numbers together", function() {
    expect(calculator.addtionFunc(3, 2)).toEqual(5);
  })
  it("Should subtract one number from another", function() {
    expect(calculator.subtractionFunc(10, 5)).toEqual(5);
  })
  it("Should multiply two numbers together", function() {
    expect(calculator.multiplyFunc(4, 4)).toEqual(16);
  })
  it("Should divide one number by another", function() {
    expect(calculator.divisionFunc(100, 20)).toEqual(5);
  })
  it("Should raise one number to the power of the other", function() {
    expect(calculator.powerFunc(5, 2)).toEqual(25);
  })
  it("Should work out the square root of the specified number", function() {
    expect(calculator.sqrtFunc(25)).toEqual(5);
  })
  it("Should calculate the BMI of a person in imperial units", function() {
    expect(calculator.imperialBMI(5, 11, 155)).toEqual(21.62);
  })
  it("Sould calculate the BMI of a person using the metric system (takes height in centimeters)", function() {
    expect(calculator.metricBMI(175, 70)).toEqual(22.9);
  })
  it("Should print the cost of the journey while the user is traveling under 60 MPH", function() {
    expect(calculator.speedUnderSixty(815, 9, 1.5, 50)).toEqual(110);
  })
})
