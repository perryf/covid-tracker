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
					<option value="positive">Total Positive Cases</option>
					<option value="death">Total Deaths</option>
					<option value="totalTestResults">Total Tested</option>
					<option value="hospitalized">Total Hospitalized</option>
					<option value="positiveIncrease">Daily of Positive Cases</option>
					<option value="deathIncrease">Daily of Deaths</option>
					<option value="totalTestResultsIncrease">
						Daily of Test Results
					</option>
					<option value="hospitalizedIncrease">
						Daily of Hospitalized Patients
					</option>
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
					<option value="week">Past Week</option>
					<option value="month">Past Month</option>
					<option value="total">Total</option>
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
