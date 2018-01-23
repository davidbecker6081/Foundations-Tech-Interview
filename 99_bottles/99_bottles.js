// recursive solution
const recursiveBottles = (start) => {
	let string
	if (start > 2) {
		string = `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottles of beer on the wall.`
	} else if (start === 2) {
		string = `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottle of beer on the wall.`
	} else if (start === 1) {
		string = `${start} bottle of beer on the wall, ${start} bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.`
	} else {
		string = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
		console.log(string)
		return
	}
	console.log(string)
	recursiveBottles(start - 1)
}

// while loop
const whileBottles = (start) => {
	let string
	while (start > 0) {
		if (start < 2) {
			string = `${start} bottle of beer on the wall, ${start} bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.`
		} else if (start === 2) {
			string = `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottle of beer on the wall.`
		} else {
			string = `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottles of beer on the wall.`
		}
		console.log(string)
		start -= 1
	}
	return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
}

whileBottles(10)

//for loop
const forBottles = (start) => {
	let string
	for (let i = start; i > 0; i--) {
		if (i < 2) {
			string = `${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
		} else {
			string = `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
		}
		console.log(string)
	}

	return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
}

forBottles(10)
