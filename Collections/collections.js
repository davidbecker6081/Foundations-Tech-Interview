const data = [
  ['Frank', 33],
  ['Stacy', 15],
  ['Juan', 24],
  ['Dom', 32],
  ['Steve', 24],
  ['Jill', 24]
]

const outputName = (sortedArray) => {
	for (let h = 0; h < sortedArray.length; h++) {
		console.log(sortedArray[h][0])
	}
}

const ascendingAge = (people) => {
  const arrayToOrder = [...people]
	for (let i = 0; i < arrayToOrder.length; i++) {
		for (let j = i + 1; j < arrayToOrder.length; j++) {
			if (arrayToOrder[j][1] < arrayToOrder[i][1]) {
				[arrayToOrder[i], arrayToOrder[j]] = [arrayToOrder[j], arrayToOrder[i]]
			}
		}
	}

	outputName(arrayToOrder)
  return arrayToOrder
}


const outputNameAge = (sortedArray) => {
	for (let h = 0; h < sortedArray.length; h++) {
		console.log(`${sortedArray[h][0]} (${sortedArray[h][1]})`)
	}
}

outputNameAge(ascendingAge(data))


const ageHash = (sortedArray) => {
	const hashMap = new Map()

	for (let i = 0; i < sortedArray.length; i++) {
		if (hashMap.has(sortedArray[i][1])) {
			hashMap.set(sortedArray[i][1], [...hashMap.get(sortedArray[i][1]), sortedArray[i][0]])
		} else {
			hashMap.set(sortedArray[i][1], [sortedArray[i][0]])
		}
	}
	
	return hashMap
}

ageHash(ascendingAge(data))