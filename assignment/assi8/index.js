// ^Q1

// var x = window.prompt("enter number");
// console.log(x);

// ^Q2

// var x = window.prompt("enter number");
// if (x % 3 == 0 && x % 4 == 0) {
//   console.log("divisible");
// } else {
//   console.log("not divisible");
// }

// ^Q3

// var x = window.prompt("enter first number");
// var y = window.prompt("enter second number");
// if (x > y) {
//   console.log(x);
// } else if (x < y) {
//   console.log(y);
// } else {
//   console.log("both are equal");
// }

// ^Q4

// var x = window.prompt("enter number");
// if (x >= 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

// ^Q5

// var x = window.prompt("enter first number");
// var y = window.prompt("enter second number");
// var z = window.prompt("enter third number");
// if (x >= y && x >= z) {
//   console.log("max is " + x);
// } else if (y >= x && y >= z) {
//   console.log("max is " + y);
// } else {
//   console.log("max is " + z);
// }
// if (x <= y && x <= z) {
//   console.log("min is " + x);
// } else if (y <= x && y <= z) {
//   console.log("min is " + y);
// } else {
//   console.log("min is " + z);
// }

// ^Q6

// var x = window.prompt("enter number");
// if (x % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// ^Q7

// var x = window.prompt("enter letter");
// if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

// ^Q8

// var x = window.prompt("enter number");
// for (var i = 1; i <= x; i++) {
//   console.log(i);
// }

// ^Q9

// var x = window.prompt("enter number");
// for (var i = 1; i <= 12; i++) {
//   console.log(x * i);
// }

// ^Q10

// var x = window.prompt("enter number");
// for (var i = 2; i <= x; i += 2) {
//   console.log(i);
// }

// ^Q11

// var b = window.prompt("enter base number");
// var e = window.prompt("enter exponent number");
// var result = 1;
// for (var i = 1; i <= e; i++) {
//   result = result * b;
// }
// console.log(result);

// ^Q12

// var x = Number(window.prompt("enter number of subjects"));
// var sum = 0;
// for (var i = 1; i <= x; i++) {
//   var sub = Number(window.prompt("enter subjects marks"));
//   sum += sub;
// }
// var avg = sum / x;
// var per = (sum / (x * 100)) * 100;
// console.log("total mark is " + sum);
// console.log("percentage is " + per + "%");
// console.log("average is " + avg);

// ^Q13

// var month = Number(window.prompt("Enter month number (1-12)"));
// var days;
// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   days = 30;
// } else if (month === 2) {
//   days = 28;
// } else {
//   console.log("invalid month");
// }
// console.log("days in month " + month + " is " + days);

// ^Q14

// var x = Number(window.prompt("enter number of subjects"));
// var sum = 0;
// for (var i = 1; i <= x; i++) {
//   var sub = Number(window.prompt("enter subjects marks"));
//   sum += sub;
// }
// var per = (sum / (x * 100)) * 100;
// var grade;
// if (per >= 90) {
//   grade = "A";
// } else if (per >= 80) {
//   grade = "B";
// } else if (per >= 70) {
//   grade = "C";
// } else if (per >= 60) {
//   grade = "D";
// } else if (per >= 40) {
//   grade = "E";
// } else {
//   grade = "F";
// }
// console.log("percentage is " + per + "%");
// console.log("grade is " + grade);

// ^Q15

// var month = Number(window.prompt("enter month number"));
// var days;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28;
//     break;
//   default:
//     console.log("invalid month number");
// }
// console.log("days in month " + month + " is " + days);

// ^Q16

// var x = window.prompt("enter letter");
// switch (x) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
//     break;
// }

// ^Q17

// var x = window.prompt("enter first number");
// var y = window.prompt("enter second number");
// switch (true) {
//   case x > y:
//     console.log(x);
//     break;
//   case x < y:
//     console.log(y);
//     break;
//     case x == y:
//       console.log("both are equal");
//   default:
//     console.log("invalid");
//     break;
// }

// ^Q18

// var x = window.prompt("enter number");
// switch (true) {
//   case x % 2 == 0:
//     console.log("even");
//     break;
//   case x % 2 == !0:
//     console.log("odd");
//     break;
//   default:
//     console.log("invalid");
//     break;
// }

// ^Q19

// var x = window.prompt("enter number");
// switch (true) {
//   case x > 0:
//     console.log("positive");
//     break;
//   case x < 0:
//     console.log("negative");
//     break;
//   case x == 0:
//     console.log("zero");
//   default:
//     console.log("invalid");
//     break;
// }

// ^Q20

// var x = Number(window.prompt("enter first number"));
// var op = window.prompt("enter operator");
// var y = Number(window.prompt("enter second number"));
// var result;

// switch (op) {
//   case "+":
//     console.log((result = x + y));
//     break;
//   case "-":
//     console.log((result = x - y));
//     break;
//   case "*":
//     console.log((result = x * y));
//     break;
//   case "/":
//     if (y == 0) {
//       console.log("division by zero is not possible");
//     } else {
//       console.log((result = x / y));
//     }
//     break;
//   default:
//     console.log("invalid operator");
//     break;
// }
