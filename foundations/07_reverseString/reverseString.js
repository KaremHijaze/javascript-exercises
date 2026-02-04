const reverseString = function(str) {
    if (!str || str.length === 0) return "";

    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
