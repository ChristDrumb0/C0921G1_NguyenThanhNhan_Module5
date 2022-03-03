let sum1: number =0;
let n1: number=0;
let n2: number=1;
let fib: number;
let loop:number = 9;
function fibonacci() {
    fib = n1+n2;
    n1=n2;
    n2=fib;
    console.log(n1);
    if (sum1<9)
    fibonacci()
}
for (let i = 0; i < loop ; i++) {
    fibonacci();
    sum1+=n1;
}
console.log(sum1);

