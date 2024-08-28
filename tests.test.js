const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caeserCipher = require("./caesarCipher");
const analyzeArray = require("./analyzeArray");


describe('capitalize', () => {
    it('single word', () => {
        expect(capitalize('foobar')).toMatch('Foobar');
    });

    it('sentence', () => {
        expect(capitalize('hello world.')).toMatch('Hello world.');
    });
});


describe('reverseString', () => {
    it('single word', () => {
        expect(reverseString('foobar')).toMatch('raboof');
    });

    it('sentence', () => {
        expect(reverseString('hello world.')).toMatch('.dlrow olleh');
    });
});


describe('calculator', () => {
    describe('add', () => {
        it('single digits', () => {
            expect(calculator.add(1, 3)).toBe(4);
        });

        it('double digits', () => {
            expect(calculator.add(54, 17)).toBe(71);
        });
    });

    describe('subtract', () => {
        it('single digits', () => {
            expect(calculator.subtract(1, 3)).toBe(-2);
        });

        it ('double digits', () => {
            expect(calculator.subtract(54, 17)).toBe(37);
        });
    });
    
    describe('multipy', () => {
        it('single digits', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        it ('double digits', () => {
            expect(calculator.multiply(12, 11)).toBe(132);
        });
    });

    describe('divide', () => {
        it('single digits', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        });

        it ('double digits', () => {
            expect(calculator.divide(12, 11)).toBe(1.09);
        });
    });
});


describe('caeser cipher', () => {
    it('single word', () => {
        expect(caeserCipher('foobar', 3)).toMatch('irredu');
    });

    it('sentence', () => {
        expect(caeserCipher('Hello world.', 3)).toMatch('khoorzruog');
    });

    it('much punctuation', () => {
        expect(caeserCipher("I can't and don't want to", 3)).toMatch('lfdqwdqggrqwzdqwwr');
    });

    it('z', () => {
        expect(caeserCipher('z', 3)).toMatch('c');
    });

    it ('x!y#zab', () => {
        expect(caeserCipher('x!y#zab', 3)).toMatch('abcde');
    });
});


describe('analyzeArray', () => {
    it ('small', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });

    it ('unordered', () => {
        expect(analyzeArray([7, 11, 4, 19, 14, 8])).toEqual({
            average: 10.5,
            min: 4,
            max: 19,
            length: 6
        });
    });
});