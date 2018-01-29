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
		const current = hashMap.get(sortedArray[i][1]) || []
		hashMap.set(sortedArray[i][1], [...current, sortedArray[i][0]])
	}

	return hashMap
}

ageHash(ascendingAge(data))

// State Capitals

const states = {
	"Oregon": "OR",
  "Alabama": "AL",
  "New Jersey": "NJ",
  "Colorado": "CO"
}

const capitals = {
	"OR": "Salem",
  "AL": "Montgomery",
  "NJ": "Trenton",
  "CO": "Denver"
}


const outputCapital = (state) => {
	const stateAbbr = states[state]
	return capitals[stateAbbr] ? capitals[stateAbbr] : 'Unknown'
}

outputCapital('OR')

const outputState = (capitalToSearch) => {
	const stateKeys = Object.keys(capitals)
	let stateAbbr

	for (let key of stateKeys) {
		if (capitals[key] === capitalToSearch) {
			stateAbbr = key
		}
	}

	const stateNameKeys = Object.keys(states)
	let state

	for (let key of stateNameKeys) {
		if (states[key] === stateAbbr) {
			state = states[key]
		}
	}
	return state
}

outputState('Denver')

// Scrabble Scoring

const outputScore = (word) => {
	if (!Array.isArray(word)) {
		word = [...word]
	}
	return word.reduce((score, letter) => {
			score += scores[letter.toUpperCase()]
		return score
	}, 0)
}
