const expect = require('chai').expect;
const calculator = require('../app/calculator');

// //Se ejecuta antes de todas las pruebas
// before(function(){
//     console.log('---Esto pasa primero antes del segundo before---');
//     before(function(){
//         console.log('Esto es una prueba con before');
//     });
// });

// //Se ejecuta despues de todas las pruebas
// after(function(){
//     console.log('---Esto se ejecuta despues de todas las pruebas---');
// });



describe("Calculator using EXPECT interface from CHAI module: ", function(){
    describe('Check addTest Function:', function(){

        // //Se ejecuta antes de cada prueba del bloque
        // beforeEach(function(){
        //     console.log("Antes de cada prueba")
        // });
        // //Se ejecuta despues de cada prueba
        // afterEach(function(){
        //     console.log("Despues de cada prueba");
        // });

        before(function() {
            console.log('Before solo este bloque de pruebas');
        });

        it("Check the returned using: expect(value).to.equal('value'): ", function(){
            result = calculator.addTested('text');
            expect(result).to.equal('text tested');
        });
        it("Check the returned value using: expect(value).to.be.a('value'): ", function(){
            result = calculator.addTested('text');
            expect(result).to.be.a('string');
        });
        it("Check the returned value string using: expect(value).to.have.lengthOf(value): ", function(){
            result = calculator.addTested('text');
            expect(result).to.have.lengthOf(11);
        });
    });
});
