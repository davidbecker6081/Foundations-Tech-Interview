[203, 44, 211, 22, 13, 5, 726, 9, 81]

// first pass

[211, 81, 22, 203, 13, 44, 5, 726, 9]

// second pass

[203, 5, 9, 211, 13, 22, 726, 44, 81]

// third pass

[5, 9, 13, 22, 44, 81, 203, 211, 726]

// sorted once process sorts largest digits place

const radixSort = (array, counter = 0) => {
  let largestNumDigits;
  let counter = counter;

  if (counter === 0) {
    largestNumDigits = findLargestNumber(array).length
  }

  if (counter !== largestNumDigits) {

  	const buckets = {
  		0: [],
  		1: [],
  		2: [],
  		3: [],
  		4: [],
  		5: [],
  		6: [],
  		7: [],
  		8: [],
  		9: []
  	}

    // function to load buckets at index counter

    // unloadBucketsReset
    // store new array
    return radixSort(newArray, counter++)
  } else {
    return array
  }

}

const findLargestNumber = (array) => {
	return Math.max(...array)
}
// need to figure out how to determine which digits place currently on

// need to figure out how to determine when to stop recursive process (if only #s of 3 digits, no need to check 4th digit in list)

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
