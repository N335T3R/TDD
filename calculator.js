class Calculator {
    constructor () {

    }

    add (a, b) {
        let sum = a + b;
        return sum;
    }

    subtract (a, b) {
        let dif = a - b;
        return dif;
    }

    multiply (a, b) {
        let prod = (a * b);
        return prod;
    }

    divide (a, b) {
        let divi = (a / b);
        
        if (divi % 1 != 0) divi = parseFloat(divi.toFixed(2));
        return divi;
    }
 }


 const calculator = new Calculator();
 module.exports = calculator;