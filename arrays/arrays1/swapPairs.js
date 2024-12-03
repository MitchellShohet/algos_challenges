// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: removeAt
// Description: Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
// Example: swap([1,2,3,4]) => [2,1,4,3]
// Example: swap​(["Brendan",true,42]) => [true,"Brendan",42]
// Interpretation: Swap the first value of an array with the second value, then the third with the fourth, and so on, skipping the final if the array is odd.

function swap(givenArray) {
    console.log(givenArray)
    for(var i = 1; i < givenArray.length; i = i+2) {
        var value1 = givenArray[i];
        var value2 = givenArray[i-1];
        givenArray[i] = value2;
        givenArray[i-1] = value1;
    }
    return givenArray
}

console.log(swap([1,2,3,4]));
console.log(swap(["Brendan",true,42]));