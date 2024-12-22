// Write functions using the JavaScript language for all challenges. 
// Do not use built-in methods (unless otherwise instructed). 
// Do not create any additional arrays. 
// .length is a property, and is allowed.

//-----------------------------
// Challenge: Second Largest
// Description: Given an array, return its second largest element. If array is too short, return null.
// Example: secondLargest([42,1,4,Math.PI,7]) => 7
// Example: secondLargest([7]) => null

function secondLargest(givenArray) {
    if(givenArray.length < 2) {
        return null
    }
    let largest = 0;
    let secondLargest = 0;
    for(var i = 0; i < givenArray.length; i++) {
        switch(true) {
            case givenArray[i] > largest:
                secondLargest = largest;
                largest = givenArray[i];
                break;
            case givenArray[i] > secondLargest:
                secondLargest = givenArray[i];
        }
    }
    return secondLargest
}

console.log(secondLargest([42,1,4,Math.PI,7]));
console.log(secondLargest([7]));