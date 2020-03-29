import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

const TableDisplay = props => {
	const {
		selectStateInfo,
		selectStateCurrent,
		selectStateHistory,
		selectState
	} = props

	return (
		<React.Fragment>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				History
			</Typography>
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
								{row.positive || ''} (+{row.positiveIncrease || 0})
							</TableCell>
							<TableCell>
								{row.negative || ''} (+{row.negativeIncrease || 0})
							</TableCell>
							<TableCell>
								{row.totalTestResults || ''} (+
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
								{row.death || 0} (+{row.deathIncrease || 0})
							</TableCell>
							<TableCell>
								{row.hospitalized || 0} (+{row.hospitalizedIncrease || 0})
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	)
}

TableDisplay.propTypes = {
	selectState: PropTypes.string,
	selectStateInfo: PropTypes.object,
	selectStateCurrent: PropTypes.object,
	selectStateHistory: PropTypes.array
}

TableDisplay.defaultProps = {
	selectState: '',
	selectStateInfo: {},
	selectStateCurrent: {},
	selectStateHistory: []
}

export default TableDisplay
