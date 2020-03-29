import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const TableDisplay = props => {
	const { selectStateHistory } = props

	return (
		<Fragment>
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
		</Fragment>
	)
}

TableDisplay.propTypes = {
	selectStateHistory: PropTypes.array
}

TableDisplay.defaultProps = {
	selectStateHistory: []
}

export default TableDisplay
