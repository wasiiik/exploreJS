var marks = [45, 65, 25, 85, 90, 99];

var max = marks[0];

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];

    if (element > max) {
        max = element;
    }
}

console.log('Higest value is: ', max);