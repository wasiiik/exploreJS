// var number = [45, 15, 87, 54, 54, 56];

// var sum = 0;

// for (var i = 0; i < number.length; i++) {
//     var element = number[i];
//     sum = sum + element;
// }

// console.log("total of the numbers: ", sum)

var number = [45, 15, 87, 54, 54, 56];

var result = getArraySum(number);

function getArraySum(numbers) {
    var sum = 0;

    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;
    }
    return sum;

}

console.log("total of the numbers: ", result);