const toSort = [203, 44, 211, 22, 13, 5, 726, 9, 81];

const findLargestNumberLength = (array) => {
	const largestNum = Math.max(...array)
	return largestNum.toString().length
}

const convertArrayToString = (array, maxLength) => {
	return array.map((num) => {
		const numOfZerosToAdd = maxLength - num.toString().length
		for (let j = 0; j < numOfZerosToAdd; j++) {
			num = '0' + num
		}
		return num.toString()
	})
}

const unloadBucketsAndReset = (buckets) => {
	const newArray = []
	for (let i = 0; i < 10; i++) {
		if (buckets[i].length) {
			for (let j = 0; j < buckets[i].length; j++) {
				newArray.push(buckets[i][j])
			}
		}
	}
	return newArray
}

const loadBuckets = (array, digitsPlace) => {
	const buckets = {
		'0': [],
		'1': [],
		'2': [],
		'3': [],
		'4': [],
		'5': [],
		'6': [],
		'7': [],
		'8': [],
		'9': []
	}
	return array.reduce((loadedBuckets, num) => {
		loadedBuckets[num[digitsPlace]].push(num)
		return loadedBuckets
	}, buckets)
}

const convertArrayToIntegers = (array) => array.map(num => parseInt(num))

const radixSort = (array, counter = 0) => {
	let largestNumDigits = findLargestNumberLength(array)
	let stringArray = array

	if (counter === 0) {
		stringArray = convertArrayToString(array, largestNumDigits)
	}
	if (counter !== largestNumDigits) {
		const currentDigitsPlace = largestNumDigits - counter - 1
		const loadedBuckets = loadBuckets(stringArray, currentDigitsPlace)
		const newArray = unloadBucketsAndReset(loadedBuckets)

		return radixSort(newArray, counter += 1)
	} else {
		return convertArrayToIntegers(stringArray)
	}
}

radixSort(toSort)
