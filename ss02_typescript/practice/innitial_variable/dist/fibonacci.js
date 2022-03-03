let sum1 = 0;
let n1 = 0;
let n2 = 1;
let fib;
let loop = 9;
function fibonacci() {
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
    console.log(n1);
    if (sum1 < 9)
        fibonacci();
}
for (let i = 0; i < loop; i++) {
    fibonacci();
    sum1 += n1;
}
console.log(sum1);
//# sourceMappingURL=fibonacci.js.map