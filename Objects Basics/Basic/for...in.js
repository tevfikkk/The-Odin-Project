// let user = new Object();

// user = {
//     name: "Red",
//     age: 30,
//     isAdmin: true
// };

// for ( let key in user ) {
//     //keys
//     //console.log(key)

//     //values for the keys
//     console.log( user[key] );
// } 

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }