// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: filterRange
// Description: Given an array and min and max values, retain only the array values between min and max.
// Example: filterRange([100,200,311,5,77,902,102], 60, 250) => [100, 200]
// Example: filterRange([9,33,7,1,5], 6, 40) => [9,33,7]

function filterRange(givenArray, min, max) {
    var currentIndex = 0;
    var removeTally = 0;
    for(var i=0; i<givenArray.length; i++) {
        if(givenArray[i] > min && givenArray[i] < max) {
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

console.log(filterRange([100,200,311,5,77,902,102], 60, 250));
console.log(filterRange([9,33,7,1,5], 6, 40));
