const toSort = [203, 44, 211, 22, 13, 5, 726, 9, 81];

const findLargestNumber = (array) => {
	const largestNum = Math.max(...array)
	return largestNum.toString().length
}

const convertArrayToString = (array, max) => {
	return array.map((num) => {
		num = num.toString()
		if (num.toString().length < max) {
			const numOfZeros = max - num.toString().length
			for (let j = 0; j < numOfZeros; j++) {
				num = '0' + num
			}
		}

		return num
	})
}

// convertArrayToString(toSort, 3)

const unloadBucketsReset = (buckets) => {
  const newArray = []

  for (let i = 0; i < 10; i++) {
    if (!buckets[i.toString()].length) {
      continue;
    }

    for (let j = 0; j < buckets[i.toString()].length; j++) {
      newArray.push(buckets[i.toString()][j])
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

const convertArrayToInteger = (array) => {
	const arrayOfIntegers = array.map(num => parseInt(num))
	return arrayOfIntegers
}

// first pass

// [211, 81, 22, 203, 13, 44, 5, 726, 9]

// // second pass

// [203, 5, 9, 211, 13, 22, 726, 44, 81]

// // third pass

// [5, 9, 13, 22, 44, 81, 203, 211, 726]


const radixSort = (array, counter) => {
  let largestNumDigits = findLargestNumber(array)
  let stringArray = array

  if (counter === 0) {
  	stringArray = convertArrayToString(array, largestNumDigits)
  }

  if (counter !== largestNumDigits) {
  	const digitsPlace = largestNumDigits - counter - 1
    const loadedBuckets = loadBuckets(stringArray, digitsPlace)
    const newArray = unloadBucketsReset(loadedBuckets)

    counter += 1
    return radixSort(newArray, counter)
  } else {
  	return convertArrayToInteger(stringArray)
  }
}

radixSort(toSort, 0)
