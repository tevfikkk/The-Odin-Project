// const makeUser = ( name, age ) => {

//     return {
//         name: name,
//         age: age
//     }

// };

// let user = makeUser("John", 30);

// console.log(user.name);

let user = new Object();

user = {
    test: undefined
}

console.log( user.noSuch === undefined ); //true
console.log( "name" in user ); // false, user.age does not exist
console.log( "test" in user ); // true