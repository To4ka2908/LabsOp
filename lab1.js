'use strict'

function hello() {
    console.log(`Hello ${x} !`)
    var x = 'World';
    console.log(`Hello ${x} !`)
    }
    
hello()

function inc(x){
        return x + 1;
    }
    
const a = 10;
const b = inc(a);
console.dir({ a, b });

inc()

function inc1(num){
    return num.n += 2;
}
const c = { n: 5 };

inc1(c);
console.dir(c);





