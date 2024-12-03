// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: insertAt
// Description: Given an array, index, and additional value, insert the value into array at given index. You may use .push(), you are able do this without it though!
// Example: insertAt([100,200,5], 2, 311) => [100,200,311,5]
// Example: insertAt([9,33,7], 1, 42) => [9,42,33,7]
// Interpretation: This function will place a given value into a given array at a specific given index.
// Test Cases: If the given index is negative the function will return the original array with an error in the console

function insertAt(givenArray, index, newValue) {
    if(index < 0) {
        console.log("Index value cannot be negative");
        return givenArray
    }
    for(var i = givenArray.length; i >= 0; i--) {
        if(i != index) {
            givenArray[i] = givenArray[i-1];
        }
        else {
            givenArray[i] = newValue;
            break
        }
    }
    return givenArray
}

console.log(insertAt([100,200,5], 2, 311))
console.log(insertAt([9,33,7], 1, 42))
console.log(insertAt([9,33,7], -1, 42))