var math = prompt("Enter Your Math Marks");
var urdu = prompt("Enter Your Urdu Marks");
var eng = prompt("Enter Your English Marks");
var sci = prompt("Enter Your Science Marks");
var comp = prompt("Enter Your Computer Marks");

console.log(eng, urdu, math, comp,sci );

math = +math;
urdu = +urdu;
eng = +eng;
sci = +sci;
comp = +comp; 


var totalMarks = eng + urdu + math + comp + sci;
var percentage = (totalMarks / (5 * 100)) * 100;
console.log(percentage + "%")
alert(" Total Marks : " + totalMarks + " Total Percentage : " + percentage + "%")
