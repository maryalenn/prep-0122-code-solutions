// create your loops here.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('Next Loop Exercise');

for (let i = 0; i < 20; i + (i = i + 2)) {
  console.log(i);
}
console.log('"Time till explosion" Exercise');

for (let i = 100; i >= 0; i--) {
  console.log('Time till explosion: ' + i + '!');
}
