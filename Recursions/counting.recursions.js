console.log("Descending Counting of a Number begins:")
/**
 * Recursive call to print numbers in descending order- N to 1
 * @param {*} num 
 * @returns 
 */
function countingDescending(num){
    // Base Condition
    if(num<=0)
        return
    console.log(num);
    // Recursive Call
    countingDescending(num-1)
}

countingDescending(10);

console.log("Ascending Counting of a Number begins:")
/**
 * Recursive call to print numbers in ascending order - 1 to N
 * @param {*} num 
 * @returns 
 */
function countingAscending(num){
    // Base Condition
    if(num<=0)
        return
    // Recursive Call
    countingAscending(num-1)
    console.log(num);
}

countingAscending(10);