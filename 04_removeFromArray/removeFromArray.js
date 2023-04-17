const removeFromArray = function(array, ...args) {
    let savedArray = [];

    array.forEach(element => {
        if(!args.includes(element)) {
            savedArray.push(element);
        }
    });
    return savedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
