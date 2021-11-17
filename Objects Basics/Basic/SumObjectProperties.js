let salaries = new Object();
let sum = new Object();

salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

sum = {
    sumSalaries: salaries.John + salaries.Ann + salaries.Pete
}

console.log(sum.sumSalaries);