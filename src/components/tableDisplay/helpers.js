export const getCountryTotals = (usCurrent = []) => {
	if (usCurrent[0] && usCurrent[0].positive) {
		return {
			positive: usCurrent[0].positive,
			negative: usCurrent[0].negative,
			hospitalized: usCurrent[0].hospitalized,
			death: usCurrent[0].death,
			totalTestResults: usCurrent[0].totalTestResults
		}
	}

	return {
		positive: 0,
		negative: 0,
		hospitalized: 0,
		death: 0,
		totalTestResults: 0
	}
}

export const handleSort = sortOrder => (a, b) => {
	if (sortOrder === 'percentPositive') {
		// ? This is the wrong kind of "Percentage of positive" - would need to bring in state population data to do this properly
		const aPercent = a.positive / a.totalTestResults
		const bPercent = b.positive / b.totalTestResults

		if (aPercent < bPercent) return 1
		if (bPercent < aPercent) return -1
	} else if (sortOrder === 'state') {
		if (a[sortOrder] < b[sortOrder]) return -1
		if (b[sortOrder] < a[sortOrder]) return 1
	} else {
		if (a[sortOrder] < b[sortOrder]) return 1
		if (b[sortOrder] < a[sortOrder]) return -1
	}
	return 0
}
