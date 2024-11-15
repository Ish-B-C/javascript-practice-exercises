var m = 0
var n= -1 
var o = 4
if (m>n && m>o) {
    if (n>o) {
    console.log(`${m}, ${n}, ${o}`)
}
    else {
    console.log(`${m}, ${o}, ${n}`)
} 
}
else if (n>m && n>o) {
    if (m>o) {
        console.log(`${n}, ${m}, ${o}`)
    }
    else  {
        console.log(`${n}, ${o}, ${m}`)
    }
} 
else if (o>m && o>n) {
    if (m>n) {
        console.log(`${o}, ${m}, ${n}`)
    }
    else {
        console.log(`${o}, ${n}, ${m}`)
    }
    }
