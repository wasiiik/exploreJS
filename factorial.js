function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= 10; i++) {
        fact = fact * i;
    }

    return fact;
}

var result = factorial(10);

console.log(result)