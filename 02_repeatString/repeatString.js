const repeatString = function(word, number) {
    returnedWord = "";
    if (number === 0) {
        returnedWord = "";
    } else if (number < 0) {
        returnedWord = "ERROR"
    } else {
        for (let index = 0; index < number; index++) {
            returnedWord += word; 
        }
    }
    return returnedWord;
};

// Do not edit below this line
module.exports = repeatString;
