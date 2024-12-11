// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: rotate
// Description: Given a numerical array and an offset amount, shift the array's values to the right by that amount. Wrap around any values that shift off the array's end so that no data is lost.
// Example: rotate([100,200,5,75,3999], 2) => [75,3999,100,200,5]
// Example: rotate([9,33,7,1], 1) => [1,9,33,7]


function rotate(givenArray, offsetAmount) {
    for(var i = givenArray.length-1+offsetAmount; i>=0; i--) {
        givenArray[i] = givenArray[i-offsetAmount];
    }
    for(var i = 0; i<offsetAmount; i++) {
        givenArray[i] = givenArray[givenArray.length-offsetAmount+i];
    }
    givenArray.length = givenArray.length-offsetAmount;
    return givenArray
}

console.log(rotate([100,200,5,75,3999], 2));
console.log(rotate([9,33,7,1], 1));