// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: arrayConcat
// Description: Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements.
// Example: arrayConcat(['a','b'], [1,2]) => ['a','b',1,2].
// Example: arrayConcat([100,200,311,5,77,902,102], [9,33,7,1,5]) => [100,200,311,5,77,902,102,9,33,7,1,5]

function arrayConcat(givenArray1, givenArray2) {
    let newArray = [];
    let newArrayIndex = 0;
    for(var i=0; i<givenArray1.length; i++) {
        newArray[newArrayIndex] = givenArray1[i];
        newArrayIndex++;
    }
    for(var i=0; i<givenArray2.length; i++) {
        newArray[newArrayIndex] = givenArray2[i];
        newArrayIndex++;
    }
    return newArray
}

console.log(arrayConcat(['a','b'], [1,2]));
console.log(arrayConcat([100,200,311,5,77,902,102], [9,33,7,1,5]));
