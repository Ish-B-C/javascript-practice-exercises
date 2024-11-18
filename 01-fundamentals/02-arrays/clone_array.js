function clone(arr) {
    return arr.slice();
    
}
var originalArray = [1,2,3,4];
var clonedArray = clone(originalArray);
console.log(clonedArray);
console.log(clonedArray === originalArray);


