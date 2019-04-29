const assert = require('chai').assert;
const calculator = require('../app/calculator');

describe("Calculator test using ASSERT interface from CHAI module:", function(){
    describe("Check addTest Function: ", function(){
        
        it("Check the returned value using: assert.equal(value,'value'): ", function(){
            result = calculator.addTested('text');
            assert.equal(result,"text tested");
        });

        it("Check the returned value using: assert.typeOf(value,'value'): ", function(){
            result=calculator.addTested('text');
            assert.typeOf(result,'string');
        });

        it("Check the returned value using: assert .lengthOf(value,'value') :",function(){
            result = calculator.addTested("test");
            assert.lengthOf(result, 11);
        })

    });
});