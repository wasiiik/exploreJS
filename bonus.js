var marks = [89, 97, 89, 68, 94, 86, 79]

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    console.log(element)
}

console.log('Outside')
console.log('Gulisthan')



function add(number1, number2) {
    var total = number1 + number2;

    return total;
}

var result1 = add(65, 89);
console.log(result1)

console.log('Not adding this time')

var result2 = add(165, 189);
console.log(result2)


function largestNumber(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        console.log(element);

    }
}

largestNumber([45, 85, 65])