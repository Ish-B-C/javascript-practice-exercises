function isArray(input) {
    if (toString.call(input) === '[object Array]') {
        return true
    }
    else {
        return false
    }
}
console.log(isArray([1, 2, 3])); 
console.log(isArray("Hello")); 