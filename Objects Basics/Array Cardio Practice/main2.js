const people = [

    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },

];

const comments = [

    { text: 'Love this!', id: 52423 },
    { text: 'Super Good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 5422453 }

];

// Some and Every checks

// some method // is at least one person 19?
const isAdult = people.some( person => (new Date()).getFullYear() - person.year >= 19 );

//console.table({isAdult});

// every method // is everyone person 19?
const allAdults = people.every( person => (new Date()).getFullYear() - person.year >= 19 );
//console.table({allAdults});

// find method
// find is like filter but instead returns just the one
// you are looking for
const comment = comments.find( ( comment ) => comment.id === 2039842 );

//console.table(comment)

// findIndex() method
// find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex( comment => comment.id === 123523 );

console.log(index);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(comments)