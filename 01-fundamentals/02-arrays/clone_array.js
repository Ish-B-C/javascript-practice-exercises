function cloneArray(arr) {
    return arr.slice();
    
}
var originalArray = [1,2,3,4];
var clonedArray = cloneArray(originalArray);
console.log(clonedArray);
console.log(clonedArray === originalArray);


