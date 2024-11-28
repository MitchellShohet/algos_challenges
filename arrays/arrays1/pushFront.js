// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Push Front
// Description: Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Example: pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// Example: pushFront([99], 7) => [7,99]
// Interpretation: Function pushFront should take 2 arguements, the first is the array and the second is the new value. pushFront should return the same array with the 
// index [0] set to the new value, and followed by each of the original array values.

function pushFront(givenArray, newValue) {
    for(var i = givenArray.length; i > 0; i--) {
        givenArray[i] = givenArray[i-1]
        if(i-1 == 0) {
            givenArray[0] = newValue;
        }
    }
    return givenArray
}

console.log(pushFront([5,7,2,3], 8));
console.log(pushFront([99], 7));