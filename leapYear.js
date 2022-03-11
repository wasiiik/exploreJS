// const year = 3688;

// const remiander = year % 4;

// // console.log(remiander == 0);

// if (remiander == 0) {
//     console.log('Your year is a leanYear');
// } else {
//     console.log('Your year is not a leanYear');
// }

function isLeapYear(year) {

    const remiander = year % 4;

    if (remiander == 0) {
        return true;
    } else {
        return false
    }
}

const check2000 = isLeapYear(2000);

console.log(check2000)