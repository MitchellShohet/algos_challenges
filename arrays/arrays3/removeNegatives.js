// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Remove Negatives
// Description: Given an array, remove the negative values, and return the same array (not a copy), preserving non-negatives’ order.
// Example: removeNegatives([-2,5,-4,10,15]) => [5,10,15]
// Example: removeNegatives([4,5,-7,-9]) => [4,5]

function removeNegatives(givenArray) {
    var currentIndex = 0;
    var removeTally = 0;
    for(var i=0; i<givenArray.length; i++) {
        if(givenArray[i] >= 0) {
            givenArray[currentIndex] = givenArray[i];
            currentIndex++
        }
        else{
            removeTally++
        }
    }
    givenArray.length = givenArray.length - removeTally;
    return givenArray
}

console.log(removeNegatives([-2,5,-4,10,15]));
console.log(removeNegatives([4,5,-7,-9]));