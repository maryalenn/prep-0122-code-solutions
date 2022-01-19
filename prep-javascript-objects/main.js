var person = {
  firstName: 'Marya',
  lastName: 'Chuong',
  hobby: 'Weight-training'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;

person.job = 'Human Resources Manager';
person.previousJob = 'Restaurant Owner';

console.log("The person's first name is: ", fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job is: " + person.previousJob);
console.log(person);
