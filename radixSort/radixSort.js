const toSort = [203, 44, 211, 22, 13, 5, 726, 9, 81];

const findLargestNumber = (array) => {
	const largestNum = Math.max(...array)
	return largestNum.toString().length
}

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
		const len = Math.floor( Math.log(num) / Math.LN10 ) - 2;
		const digit = ((num / Math.pow(10, len)) % 10) | 0
		console.log('digit:', digit, 'num:', num)
		if (!digit) {
			loadedBuckets['0'].push(num)
		} else {
			loadedBuckets[digit].push(num)
		}
		return loadedBuckets
	}, buckets)
}

loadBuckets(toSort, 0)

// first pass

// [211, 81, 22, 203, 13, 44, 5, 726, 9]

// // second pass

// [203, 5, 9, 211, 13, 22, 726, 44, 81]

// // third pass

// [5, 9, 13, 22, 44, 81, 203, 211, 726]


const radixSort = (array, counter) => {
  let largestNumDigits = findLargestNumber(array)

  if (counter !== largestNumDigits) {
    const loadedBuckets = loadBuckets(array, counter)
    const newArray = unloadBucketsReset(loadedBuckets)

    counter += 1
    return radixSort(newArray, counter)
  } else {
  	return array
  }
}

radixSort(toSort, 0)
