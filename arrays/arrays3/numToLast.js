// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Nth-To-Last
// Description: Given an array and a number, return the element that is that number of values from the array's end. If array is too short, return null.
// Example: numToLast([5,2,3,6,4,9,7], 3) => 4
// Example: numToLast([7,4,3,5], 8) => null

function numToLast(givenArray, numFromEnd) {
    if(givenArray.length < numFromEnd) {
        return null
    }
    return givenArray[givenArray.length-numFromEnd]
}

console.log(numToLast([5,2,3,6,4,9,7], 3));
console.log(numToLast([7,4,3,5], 8));