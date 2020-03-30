import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import TableFilters from '../tableDisplay/TableFilters'

const useStyles = makeStyles({
	sortingColumnHeader: {
		cursor: 'pointer',
		color: '#00796b'
	}
})

const TableDisplay = props => {
	const {
		selectStateHistory,
		statesCurrent,
		tableDisplay,
		changeTableDisplay
	} = props

	const [sortOrder, setSortOrder] = useState('positive')

	const changeSortOrder = name => {
		setSortOrder(name)
	}

	const classes = useStyles()

	const stateData = statesCurrent.slice().sort((a, b) => {
		if (sortOrder === 'state') {
			if (a[sortOrder] < b[sortOrder]) return -1
			if (b[sortOrder] < a[sortOrder]) return 1
		} else {
			if (a[sortOrder] < b[sortOrder]) return 1
			if (b[sortOrder] < a[sortOrder]) return -1
		}
		return 0
	})

	const table =
		tableDisplay === 'history' ? (
			// * HISTORY
			<Table size="medium">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Tested Positive</TableCell>
						<TableCell>Negative Tests</TableCell>
						<TableCell>Total Tested</TableCell>
						<TableCell>Percent Positive</TableCell>
						<TableCell>Deaths</TableCell>
						<TableCell>Hospitalized</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{selectStateHistory.map(row => (
						<TableRow key={row.hash}>
							<TableCell>
								{row.dateChecked
									? moment(row.dateChecked).format('MM/DD/YYYY')
									: ''}
							</TableCell>
							<TableCell>
								{row.positive ? row.positive.toLocaleString() : 0} (+
								{row.positiveIncrease
									? row.positiveIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
							<TableCell>
								{row.negative ? row.negative.toLocaleString() : 0} (+
								{row.negativeIncrease
									? row.negativeIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
							<TableCell>
								{row.totalTestResults
									? row.totalTestResults.toLocaleString()
									: 0}{' '}
								(+
								{row.totalTestResultsIncrease
									? row.totalTestResultsIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
							<TableCell>
								{row.positive && row.totalTestResults
									? `${Math.round(
											(row.positive / row.totalTestResults) * 100,
											2
									  )}%`
									: ''}
							</TableCell>
							<TableCell>
								{row.death ? row.death.toLocaleString() : 0} (+
								{row.deathIncrease ? row.deathIncrease.toLocaleString() : 0})
							</TableCell>
							<TableCell>
								{row.hospitalized ? row.hospitalized.toLocaleString() : 0} (+
								{row.hospitalizedIncrease
									? row.hospitalizedIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		) : (
			// * STATES
			<Table size="medium">
				<TableHead>
					<TableRow>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('state')}
							>
								State
							</span>
						</TableCell>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('positive')}
							>
								Tested Positive
							</span>
						</TableCell>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('negative')}
							>
								Negative Tests
							</span>
						</TableCell>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('totalTestResults')}
							>
								Total Tested
							</span>
						</TableCell>
						<TableCell>Percent Positive</TableCell>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('death')}
							>
								Deaths
							</span>
						</TableCell>
						<TableCell>
							<span
								className={classes.sortingColumnHeader}
								onClick={() => changeSortOrder('hospitalized')}
							>
								Hospitalized
							</span>
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{stateData.map(row => (
						<TableRow key={row.hash}>
							<TableCell>{row.state}</TableCell>
							<TableCell>
								{row.positive ? row.positive.toLocaleString() : ''} (+
								{row.positiveIncrease
									? row.positiveIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
							<TableCell>
								{row.negative ? row.negative.toLocaleString() : ''} (+
								{row.negativeIncrease
									? row.negativeIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
							<TableCell>
								{row.totalTestResults
									? row.totalTestResults.toLocaleString()
									: ''}{' '}
								(+
								{row.totalTestResultsIncrease || 0})
							</TableCell>
							<TableCell>
								{row.positive && row.totalTestResults
									? `${Math.round(
											(row.positive / row.totalTestResults) * 100,
											2
									  )}%`
									: ''}
							</TableCell>
							<TableCell>
								{row.death ? row.death.toLocaleString() : 0} (+
								{row.deathIncrease ? row.deathIncrease.toLocaleString() : 0})
							</TableCell>
							<TableCell>
								{row.hospitalized ? row.hospitalized.toLocaleString() : 0} (+
								{row.hospitalizedIncrease
									? row.hospitalizedIncrease.toLocaleString()
									: 0}
								)
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)

	return (
		<Fragment>
			{false && ( // * Remove if no longer needed
				<Typography component="h2" variant="h6" color="primary" gutterBottom>
					History
				</Typography>
			)}

			<TableFilters
				tableDisplay={tableDisplay}
				changeTableDisplay={changeTableDisplay}
			/>

			{table}
		</Fragment>
	)
}

TableDisplay.propTypes = {
	selectStateHistory: PropTypes.array,
	statesCurrent: PropTypes.array,
	tableDisplay: PropTypes.string,
	changeTableDisplay: PropTypes.func.isRequired
}

TableDisplay.defaultProps = {
	selectStateHistory: [],
	statesCurrent: [],
	tableDisplay: 'history'
}

export default TableDisplay
