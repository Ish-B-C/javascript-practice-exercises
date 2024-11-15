var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = 1;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log(`${a} is the bigger number`);
} else if (b >= a && b >= c && b >= d && b >= e) {
    console.log(`${b} is the bigger number`);
} else if (c >= a && c >= b && c >= d && c >= e) {
    console.log(`${c} is the bigger number`);
} else if (d >= a && d >= b && d >= c && d >= e) {
    console.log(`${d} is the bigger number`);
} else {
    console.log(`${e} is the bigger number`);
}
