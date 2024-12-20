// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Second-To-Last
// Description: Given an array, return its second-to-last element. If array is too short, return null.
// Example: secondToLast([42,true,4,"Kate",7]) => "Kate"
// Example: secondToLast([7]) => null

function secondToLast(givenArray) {
    if(givenArray.length < 2) {
        return null
    }
    return givenArray[givenArray.length-2]
}

console.log(secondToLast([42,true,4,"Kate",7]));
console.log(secondToLast([7]));
