const sumAll = function(a, b) {
    let sum = 0;
    if (typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0) {
        return 'ERROR';
    } 
    if (a < b) {
        for (let i = a; i < b+1; i++) {
            sum += i;
        }
    } else {
        for (let j = b; j < a+1; j++) {
            sum += j;
        }
    }
    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
