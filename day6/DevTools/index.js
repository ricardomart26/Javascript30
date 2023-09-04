
const dogs = [{ dogName: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


// Regular 

console.log('hello');

// Interpolated

console.log('hello I am a %s string!', 'beautifull');

// Styled

console.log('%c I am some great text!', 'font-size:50px; background:red;');


// Warning

console.warn("WARNING");

// Error

console.log("Shit!");


// Info

console.info("Crocodiles eat 3-4 people per year");

// Testing

console.assert(1 === 2, "If false it will throw an error");

// Clearing

console.clear();

// Viewing DOM elements

console.dir("A dom element");


// Grouping together 

dogs.forEach(({name, age}) => {
    console.groupCollapsed(`${name}`);
    console.log(`This is ${name}`);
    console.log(`${name} is ${age} years old`);
    console.log(`${name} is ${age * 7} dog years old`);
    console.groupEnd(`${name}`);
});


// Counting

console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');


// Timing

console.time('Fetching time');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

// Table

console.table(dogs);