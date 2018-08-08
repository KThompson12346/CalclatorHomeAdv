// TDD Tests
describe("Testing the functions of my Advanced calculator", function(){

  var calculator = require("../calcTDD/lib/CalAdvFunc");

  it("Should add two numbers together", function(){
    expect(calculator.addTwoNumbers(3, 2)).toEqual(5);
  })
})
