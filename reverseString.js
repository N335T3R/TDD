function reverseString (string) {
    let revChars = [];

    for (let i = string.length - 1; i >= 0; i--) {
        revChars.push(string.charAt(i));
    }

    let newString = revChars.join("");
    return newString;
}

module.exports = reverseString;