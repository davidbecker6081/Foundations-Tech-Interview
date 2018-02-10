const radixSort = (array) => {
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

	const largesNum = findLargestNumber(array)

}

const findLargestNumber = (array) => {
	return Math.max(...array)
}
