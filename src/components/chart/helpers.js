export const getYLabel = type => {
	switch (type) {
		case 'positive':
			return 'Total Tested Positive'

		case 'death':
			return 'Total Deaths'

		case 'totalTestResults':
			return 'Total Tested'

		case 'hospitalized':
			return 'Total Hospitalized'

		case 'positiveIncrease':
			return 'Daily Positive Cases'

		case 'deathIncrease':
			return 'Daily Deaths'

		case 'totalTestResultsIncrease':
			return 'Daily Test Results'

		case 'hospitalizedIncrease':
			return 'Daily Hospitalized'

		default:
			return ''
	}
}
