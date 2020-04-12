import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import TableFilters from '../tableDisplay/TableFilters'

const getCountryTotals = (usCurrent = []) => {
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

const useStyles = makeStyles(theme => ({
	tableHeader: {
		display: 'flex',
		alignItems: 'center',
		minWidth: 360
	},
	tableSubtext: {
		marginLeft: 18
	},
	sortingColumnHeader: {
		cursor: 'pointer',
		color: theme.palette.primary.main
	},
	sortSelected: {
		color: theme.palette.secondary.dark
	}
}))

const TableDisplay = props => {
	const {
		selectStateHistory,
		statesCurrent,
		selectState,
		usCurrent,
		tableDisplay,
		changeTableDisplay
	} = props

	// * STATE
	const [sortOrder, setSortOrder] = useState('positive')

	// * METHODS
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

	const usTotals = getCountryTotals(usCurrent)

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
						<TableCell>Death Rate</TableCell>
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
									? `${((row.positive / row.totalTestResults) * 100).toFixed(
											2
									  )}%`
									: ''}
							</TableCell>
							<TableCell>
								{row.death ? row.death.toLocaleString() : 0} (+
								{row.deathIncrease ? row.deathIncrease.toLocaleString() : 0})
							</TableCell>
							<TableCell>{row.deathRate ? `${row.deathRate}%` : ''}</TableCell>
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
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'state' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('state')}
							>
								State
							</span>
						</TableCell>
						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'positive' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('positive')}
							>
								Tested Positive
							</span>
						</TableCell>
						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'negative' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('negative')}
							>
								Tested Negative
							</span>
						</TableCell>
						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'totalTestResults' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('totalTestResults')}
							>
								Total Tested
							</span>
						</TableCell>
						<TableCell>Percent Positive</TableCell>
						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'death' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('death')}
							>
								Deaths
							</span>
						</TableCell>

						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'deathRate' && classes.sortSelected
								)}
								onClick={() => changeSortOrder('deathRate')}
							>
								Death Rate
							</span>
						</TableCell>

						<TableCell>
							<span
								className={clsx(
									classes.sortingColumnHeader,
									sortOrder === 'hospitalized' && classes.sortSelected
								)}
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
								{row.positive ? row.positive.toLocaleString() : ''} (
								{row.positive && usTotals.positive
									? ((row.positive / usTotals.positive) * 100).toFixed(2)
									: 0}
								%)
							</TableCell>
							<TableCell>
								{row.negative ? row.negative.toLocaleString() : ''} (
								{row.negative && usTotals.negative
									? ((row.negative / usTotals.negative) * 100).toFixed(2)
									: 0}
								%)
							</TableCell>
							<TableCell>
								{row.totalTestResults
									? row.totalTestResults.toLocaleString()
									: ''}{' '}
								(
								{row.totalTestResults && usTotals.totalTestResults
									? (
											(row.totalTestResults / usTotals.totalTestResults) *
											100
									  ).toFixed(2)
									: 0}
								%)
							</TableCell>
							<TableCell>
								{row.positive && row.totalTestResults
									? `${((row.positive / row.totalTestResults) * 100).toFixed(
											2
									  )}%`
									: ''}
							</TableCell>
							<TableCell>
								{row.death ? row.death.toLocaleString() : 0} (
								{row.death && usTotals.death
									? ((row.death / usTotals.death) * 100).toFixed(2)
									: 0}
								%)
							</TableCell>
							<TableCell>{row.deathRate ? `${row.deathRate}%` : ''}</TableCell>
							<TableCell>
								{row.hospitalized ? row.hospitalized.toLocaleString() : 0} (
								{row.hospitalized && usTotals.hospitalized
									? ((row.hospitalized / usTotals.hospitalized) * 100).toFixed(
											2
									  )
									: 0}
								%)
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)

	return (
		<Fragment>
			<div className={classes.tableHeader}>
				<TableFilters
					tableDisplay={tableDisplay}
					changeTableDisplay={changeTableDisplay}
					selectState={selectState}
				/>
				<Typography
					className={classes.tableSubtext}
					component="p"
					variant="caption"
					color="textSecondary"
				>
					{tableDisplay === 'history'
						? '(number of new daily increases)'
						: '(percentage of country)'}
				</Typography>
			</div>
			{table}
		</Fragment>
	)
}

TableDisplay.propTypes = {
	selectState: PropTypes.string,
	selectStateHistory: PropTypes.array,
	statesCurrent: PropTypes.array,
	usCurrent: PropTypes.array,
	tableDisplay: PropTypes.string,
	changeTableDisplay: PropTypes.func.isRequired
}

TableDisplay.defaultProps = {
	selectState: '',
	selectStateHistory: [],
	statesCurrent: [],
	tableDisplay: 'history'
}

export default TableDisplay
