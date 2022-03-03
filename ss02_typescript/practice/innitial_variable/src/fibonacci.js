var sum1 = 0;
var n1 = 0;
var n2 = 1;
var fib;
var loop = 9;
function fibonacci() {
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
    console.log(n1);
}
for (var i = 0; i < loop; i++) {
    fibonacci();
    sum1 += n1;
}
console.log(sum1);
