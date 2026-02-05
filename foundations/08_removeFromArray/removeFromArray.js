const removeFromArray = function(arr, ...elements) {
    if (!Array.isArray(arr) || arr.length === 0) return arr;

    return arr.filter(item => !elements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
