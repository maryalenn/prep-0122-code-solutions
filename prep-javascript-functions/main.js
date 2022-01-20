function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHourstoMinutes(hours) {
  return hours * 60;
}
console.log(convertHourstoMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return (2 * radius * Math.PI);
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Juan', 'Ramirez'));
function cube(a) {
  return (a * a) * a;
}
console.log(cube(5));
