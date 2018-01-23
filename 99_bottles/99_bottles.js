// recursive solution
const recursiveBottles = (start) => {
	let bottleObj = {
    'above2': `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottles of beer on the wall.`,
    2: `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottle of beer on the wall.`,
    1: `${start} bottle of beer on the wall, ${start} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`,
    0: 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
  }
	if (start > 2) {
		string = bottleObj['above2']
	} else {
		string = bottleObj[start]
		console.log(string)
	}
	console.log(string)
	return start > 0 ? recursiveBottles(start - 1) : 'Need More Beer'
}

// while loop
const makeBottleObj = (start) => {
  return {
    'above2': `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottles of beer on the wall.`,
    2: `${start} bottles of beer on the wall, ${start} bottles of beer. Take one down and pass it around, ${start - 1} bottle of beer on the wall.`,
    1: `${start} bottle of beer on the wall, ${start} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`,
    0: 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'
  }
}

const whileBottles = (start) => {
	let string
  let bottleObj
	while (start > 0) {
    bottleObj = makeBottleObj(start)
		if (start < 3) {
			string = bottleObj[start]
		} else {
			string = bottleObj['above2']
		}
		console.log(string)
		start -= 1
	}
	return bottleObj[0]
}

whileBottles(10)

//for loop
const forBottles = (start) => {
	let string
  let bottleObj
	for (let i = start; i > 0; i--) {
    bottleObj = makeBottleObj(i)
		if (i < 2) {
			string = `${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
		} else {
			string = `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
		}
		console.log(string)
	}

	return bottleObj[0]
}

forBottles(10)
