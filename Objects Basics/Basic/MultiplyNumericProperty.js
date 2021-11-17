let menu = new Object();
let ifNumber = new Object();

menu = {

    width: 200,
    height: 300,
    title: "My menu"

};

ifNumber = {
    num: (num) => num === 'number' ? true : false
};

const multiplyNumeric = (obj) => {

    for(let key in obj) {
        if ( typeof obj[key] === "number" ){
            obj[key] *= 2;
        }
    }
    return obj;
};

console.log(multiplyNumeric(menu));