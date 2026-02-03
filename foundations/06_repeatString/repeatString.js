const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    if (!str || str.length === 0) return "";
    
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr = arr.concat(str.split(""));
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
