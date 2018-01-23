const ascendingAge = (people) => {
	for (let i = 0; i < people.length; i++) {
		for (let j = i + 1; j < people.length; j++) {
			if (people[j][1] < people[i][1]) {
				[people[i], people[j]] = [people[j], people[i]]
			}
		}
	}

	for (let h = 0; h < people.length; h++) {
		console.log(people[h][0])
	}
}
