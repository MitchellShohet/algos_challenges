// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: removeAt
// Description: Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it.
// Example: removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// Example: removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
// Interpretation: This function will remove the value from an array that's at the index provided.
// Test Cases: If the given index is negative the function will return the original array with an error in the console

function removeAt(givenArray, index) {
    if(index < 0) {
        console.log("Index value cannot be negative");
        return givenArray
    }
    var removedValue = givenArray[index];
    for(var i = index; i < givenArray.length; i++) {
        givenArray[i] = givenArray[i+1];
    }
    givenArray.length = givenArray.length-1;
    console.log(givenArray);
    return removedValue
}

console.log(removeAt([1000,3,204,77], 1));
console.log(removeAt([8,20,55,44,98], 3));