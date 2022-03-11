var student = { id: 121, phone: 1754, name: "Abir" };

var student2 = { id: 122, phone: 222754, name: "Hasan" }

var phoneNo = student.phone;

var phoneNo = student["phone"]

var phonePropName = "name"
var phoneNo = student[phonePropName];

student2.phone = 542;
student2["phone"] = 5544;

student2[phonePropName] = 15415440;

student2.cinema = "Ogni22";
student2["cinema"] = "smart girl"

console.log(phoneNo);
console.log(student2);