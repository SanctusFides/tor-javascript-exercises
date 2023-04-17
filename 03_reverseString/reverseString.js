const reverseString = function(words) {
    let backwards = "";
    for (let index = words.length; 0 <= index; index--) {
        backwards += words.charAt(index);
    }

    return backwards;
};

// Do not edit below this line
module.exports = reverseString;
