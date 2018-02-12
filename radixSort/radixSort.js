[203, 44, 211, 22, 13, 5, 726, 9, 81]

// first pass

const radixSort = (array) => {
	const buckets = {
		0: [],
		1: [211, 81],
		2: [22],
		3: [203, 13],
		4: [44],
		5: [5],
		6: [726],
		7: [],
		8: [],
		9: [9]
	}

	const largestNumDigits = findLargestNumber(array).length

}

const findLargestNumber = (array) => {
	return Math.max(...array)
}



// unload buckets, create new array

const unloadBucketsReset = (buckets) => {
  const newArray = []
  // for loop 10 times, checking size of buckets
  for (let i = 0; i < 10; i++) {
    if (!buckets[i].length) {
      continue;
    }

    for (let j = 0; j < buckets[i].length; j++) {
      newArray.push(buckets[i][j])
    }
  }
    // if bucket is empty, continue
    // unload bucket into newArray => FIFO process (push into array)
  return newArray
}
