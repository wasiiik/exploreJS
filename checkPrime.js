var n = 77;

function isPrime(n) {
    for (i = 2; i < n - 1; i++) {
        console.log(i, n % i);
        if (n % i == 0) {
            return 'Not a prime number';

        }
    }

    return 'Its a prime number';
}

var result = isPrime(128);

console.log(result);