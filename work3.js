function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(5), f(4), f(3) );

console.log( sum(5)(8), sum(3)(4), sum(9)(52) );