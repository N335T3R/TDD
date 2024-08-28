function caeserCipher (string, shift) {
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let letters = [];
    // immediately below RegEx requires unicode flag to work in Javascript
    let punct = /\p{P}/u;
    let upper = new RegExp('[A-Z]');

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === " " || punct.test(string.charAt(i))) continue;
        else {
            // Get current letter; if CAPS, convert to lower case
            let z = string.charAt(i);
            if (upper.test(z)) z = z.toLowerCase();

            // calculate index in abc and shift
            // if exceeds "z", wrap around to "a" again
            let x = abc.indexOf(z) + shift;
            if (x > 25) x = x - 26;

            // push shifted letter to array
            let y = abc[x];
            letters.push(y);
        }
    }
    // convert array to string and return
    let cipher = letters.join("");
    return cipher;
}

module.exports = caeserCipher;