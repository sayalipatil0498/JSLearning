function fib(n)
{
    let a=0 , b=1, c, i;
    if(n==0)
    return a;
    for(i=2; i<=n; i++){
        c = a+b;
        a= b;
        b=c;
    }
    return b;


}

var result = fib(2);
console.log(result);
var result = fib(3);
console.log(result);
var result = fib(4);
console.log(result);
var result = fib(5);
console.log(result);