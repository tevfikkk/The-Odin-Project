const inventors = [

    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newston', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }

];

const people = [ 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
'Beecher Henry' ];

// filter method 

const filteredPeople = inventors.filter( el => el.year >= 1500 && el.year < 1600 );

//console.table(filteredPeople); // that's a nice tip

// map method
const nameSurname = inventors.map( el => el.first + " " + el.last );

// console.table(nameSurname);

const sortedAge = inventors.sort( (p1, p2) => p1.year > p2.year ? 1 : -1 );

//console.table(sortedAge);

// reduce method. How many years did all the inventors live?

const totalYears = inventors.reduce( ( total, inventor ) => total + ( inventor.passed - inventor.year ), 0 );

//console.log(totalYears);

// Sort the inventors by years lived

const oldest = inventors.sort( ( p1, p2 ) => {

    const lastGuy = p1.passed - p1.year;
    const firstGuy = p2.passed - p2.year;

    return lastGuy > firstGuy ? -1 : 1;

} );

//console.table(oldest);

// sort exercise 
// sort the people alphebetically by last name

const sortedLastName = people.sort( ( lastOne, nextOne ) => {

    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;

} );

//console.table(sortedLastName);


// Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'truck',
'walk', 'walk', 'car', 'truck', 'car', 'walk'];

const reduced = data.reduce( ( obj, item ) => {

    !obj[item] ? obj[item] = 0 : false;
    obj[item]++;
    return obj;

}, {} );

console.log(reduced);
