// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Pop Front
// Description: Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// Example: popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// Example: popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
// Interpretation: Function pushFront should take an array as an argument. It should print the array with the original index [0] removed, and return that original value.

function popFront(givenArray) {
    var originalIndex0 = givenArray[0];
    for(var i = 0; i < givenArray.length-1; i++) {
        givenArray[i] = givenArray[i+1];
    }
    givenArray.length = givenArray.length-1;
    console.log(givenArray);
    return originalIndex0
}

console.log(popFront([0,5,10,15]))
console.log(popFront([4,5,7,9]))