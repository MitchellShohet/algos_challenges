// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: reverse
// Description: Given a numerical array, reverse the order of values.
// Example: reverse([100,200,5]) => [5,200,100]
// Example: reverse([9,33,7,1]) => [1,7,33,9]


function reverse(givenArray) {
    for(var i=0; i < (givenArray.length/2); i++) {
        var value1 = givenArray[i];
        var value2 = givenArray[givenArray.length-i-1];
        givenArray[i] = value2;
        givenArray[givenArray.length-i-1] = value1;
    }
    return givenArray
}

console.log(reverse([100,200,5]));
console.log(reverse([9,33,7,1]));

