const sumAll = function(start, end) {
    if( !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 || 
        end < 0) {
            return "ERROR";
    }

    [minNum, maxNum] = start < end ? [start, end] : [end, start];
    let sum = 0;
    for (let n = minNum; n <= maxNum; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
