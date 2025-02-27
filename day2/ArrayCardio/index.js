

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// MY AWAY
inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);

// COURSE WAY
inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

// CHAT GPT OTIMIZATION
inventors.filter(({ year }) => year >= 1500 && year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// MY AWAY
// UNDERSTOOD IT WRONG
inventors.map((inventor) => [{'first': inventor.first, 'last': inventor.last}]);

// COURSE WAY
inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// CHAT GPT OTIMIZATION
inventors.map(({ first, last }) => `${first} ${last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// MY AWAY
inventors.sort((inventor1, inventor2) => inventor1.year < inventor2.year ? -1 : 1);

// COURSE WAY
inventors.sort((a, b) => a.year > b.year ? 1 : -1);



// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// MY AWAY
inventors.reduce((acc, { passed, year}) => acc + (passed - year), 0);

// COURSE WAY
inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived

// MY AWAY
inventors.sort((inventor1, inventor2) => (inventor1.passed - inventor1.year) < (inventor2.passed - inventor2.year) ? -1 : 1);

// COURSE WAY
inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return (lastGuy > nextGuy ? 1 : -1);
})


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// // MY WAY
// const streets = document.querySelectorAll(".mw-category-group a");
// Array.from(streets).map((street) => street.innerHTML).filter((street) => street.includes("de"));


// // COURSE WAY
// const category = document.querySelector(".mw-category-group");
// const links = [...category.querySelectorAll("a")];
// const de = links
//             .map((link) => link.textContent)
//             .filter((streetName) => streetName.includes("de"));


// 7. sort Exercise
// Sort the people alphabetically by last name

// MY AWAY
people.sort((person1, person2) => person1.split(', ')[0] < person2.split(', ')[0] ? -1 : 1);

// COURSE WAY
people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    return alast > blast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// MY AWAY
data.reduce((obj, value) => {
    obj[value]++;
    return obj
}, {
    car: 0,
    truck: 0,
    bike: 0,
    walk: 0,
    van: 0
});


// COURSE WAY
data.reduce((obj, value) => {
    if (!obj[value])
        obj[value] = 0;
    obj[value]++;
    return obj
}, {});

