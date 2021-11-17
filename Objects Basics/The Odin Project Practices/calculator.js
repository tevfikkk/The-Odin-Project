const calculator = {

    add: ( ...args ) => args.reduce( ( prev, curr ) => prev += curr ),

    subtract: ( ...args ) => args.reduce( ( prev, curr ) => prev -= curr ),

    multiply: ( ...args ) => args.reduce( ( prev, curr ) => prev *= curr ),

    power: ( a, b ) => Math.pow(a, b),

    factorial: ( a ) => a === 0 ? 1 : a * calculator.factorial( a - 1 )

}
console.log( calculator.power( 9, 3 ) )