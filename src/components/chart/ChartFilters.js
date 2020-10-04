import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles({
	chartInputs: {
		marginBottom: 6,
		display: 'flex',
		flexDirection: 'row'
	},
	chartInput: {
		margin: '0 6px',
		padding: 2
	}
})

const ChartFilters = props => {
	const {
		chartDisplay,
		chartDateRange,
		changeChartDisplay,
		changeChartDateRange
	} = props

	const classes = useStyles()

	return (
		<div className={classes.chartInputs}>
			<FormControl>
				<Select
					native
					value={chartDisplay}
					onChange={changeChartDisplay}
					className={classes.chartInput}
					inputProps={{
						name: 'display',
						id: 'chartDisplayOptions'
					}}
				>
					<option value="positive">Total Positive</option>
					<option value="death">Total Deaths</option>
					<option value="totalTestResults">Total Tested</option>
					<option value="hospitalized">Total Hospitalized</option>
					<option value="positiveIncrease">Daily Positive Cases</option>
					<option value="deathIncrease">Daily Deaths</option>
					<option value="totalTestResultsIncrease">Daily Test Results</option>
					<option value="hospitalizedIncrease">Daily Hospitalized</option>
				</Select>
			</FormControl>

			<FormControl>
				<Select
					native
					value={chartDateRange}
					onChange={changeChartDateRange}
					className={classes.chartInput}
					inputProps={{
						name: 'date',
						id: 'chartDateOptions'
					}}
				>
					<option value="week">Week</option>
					<option value="month">Month</option>
					<option value="3month">3 Months</option>
					<option value="6month">6 Months</option>
					<option value="total">All Time</option>
				</Select>
			</FormControl>
		</div>
	)
}

ChartFilters.propTypes = {
	chartDisplay: PropTypes.string,
	chartDateRange: PropTypes.string,
	changeChartDisplay: PropTypes.func.isRequired,
	changeChartDateRange: PropTypes.func.isRequired
}

ChartFilters.defaultProps = {
	chartDisplay: '',
	chartDateRange: '',
	selectStateCurrent: {},
	selectStateHistory: []
}

export default ChartFilters
