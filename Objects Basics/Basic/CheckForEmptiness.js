const isEmpty = (obj) => {

    for (let key in obj) {
        return false;
    }
    return true;

};

let obj = new Object();

console.log( isEmpty(obj) );

obj[ "Like a Monster" ] = "Nergigante";

console.log( isEmpty(obj) );