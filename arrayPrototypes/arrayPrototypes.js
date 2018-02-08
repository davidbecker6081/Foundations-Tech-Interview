const coffeeOrders = [
	{ name: 'David', size: 'grande', drink: 'mocha' },
	{ name: 'Jamie', size: 'tall', drink: 'black_coffee' },
	{ name: 'Alex', size: 'grande', drink: 'latte' },
	{ name: 'Jake', size: 'venti', drink: 'cappucino' },
	{ name: 'Jody', size: 'tall', drink: 'frappucino' },
];

const prices = {
	'black_coffee': { 'tall': 1.50, 'grande': 2.00, 'venti': 2.50 },
	'latte': { 'tall': 2.50, 'grande': 3.50, 'venti': 4.50 },
	'mocha': { 'tall': 2.60, 'grande': 3.20, 'venti': 4.10 },
	'cappucino': { 'tall': 2.60, 'grande': 3.60, 'venti': 4.60 },
	'frappucino': { 'tall': 3.20, 'grande': 4.10, 'venti': 5.25 }
}

const moneyInTheBank = {
	'David': 3.75,
	'Jamie': 3.00,
	'Alex': 9.00,
	'Jake': 7.00,
	'Jody': 4.50,
}

// return the total price of all the drink orders
// => 16

// Create an array with all of the drinks that need to be made
// [ 'mocha', 'black_coffee', 'latte', 'cappucino', 'frappucino' ]


// Make an array with orders over 3.20
// => [
//      { name: 'Alex', size: 'grande', drink: 'latte' },
//      { name: 'Jake', size: 'venti', drink: 'cappucino' }
//    ]

// Make an array with names for orders over 2
// [ ' David', 'Alex', 'Jake', 'Jody' ]


// Return the first drink with a price of more than or equal to 4.55


// Console.log the keys in the prices object
// And console.log an object with each key as the value of a new property called 'type' without making a new array
// => [ { type: 'black_coffee' }, { type: 'latte' }, { type: 'mocha' }, { type: 'cappucino' }, { type: 'frappucino' } ]


// Create an object like this with price owed for each person:
// priceOwed = {
//  'David': 3.20,
// 	'Jamie': 1.50,
// 	'Alex': 3.50,
// 	'Jake': 4.60,
// 	'Jody': 3.20
// }


// EXTRA CRED! Give it a shot!
// write a function that takes in a drink order ( { name: 'David', drink: 'latte' } ), console.logs `Hey name1, here are your options!` and returns an object with the possible sizes that person can buy based on the moneyInTheBank object
// => { sizes: [ 'tall', 'grande' ] }
