const should = require('chai').should();
const calculator = require('../app/calculator');

describe("Calculator tests using SHOULD interface from CHAI module: ", function(){
    describe("Check AddTest Function: ", function(){
       it("Check the returned value using: value.should.equal('value'): ", function(){
            result = calculator.addTested('text');
            result.should.equal('text tested');
       });
       it("Check the returned value using: value.should.be.a('value'): ", function(){
           result = calculator.addTested('text');
           result.should.be.a('string');
       });
       it("Check returned value using: value.should.have.lengthOf(value): ", function(){
           result = calculator.addTested('text');
           result.should.have.lengthOf(11);
       });
    });
});
