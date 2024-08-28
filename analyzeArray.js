const mergeSort = require("./mergeSort");

function analyzeArray (arr) {
    let obj = {
        average: null,
        min: null,
        max: null,
        length: null
    };
    let sum = 0;
    let ordered = mergeSort(arr);

    obj.min = ordered[0];
    obj.max = ordered[ordered.length - 1];
    obj.length = ordered.length;
    
    for (let i = 0; i < ordered.length; i++) {
        sum += ordered[i];
    }

    obj.average = sum / ordered.length;

    return obj;
}

module.exports = analyzeArray;