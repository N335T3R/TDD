function capitalize (string) {
    let upper = string.charAt(0).toUpperCase();
    let substring = string.substring(1);

    let newString  = upper + substring;
    return newString;
}


module.exports = capitalize;