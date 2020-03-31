import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles({
	chartInput: {
		margin: '0 6px',
		padding: 2,
		width: '40%',
		maxWidth: 250
	}
})

const TableFilters = props => {
	const { tableDisplay, changeTableDisplay } = props
	const classes = useStyles()

	return (
		<FormControl>
			<Select
				native
				value={tableDisplay}
				onChange={changeTableDisplay}
				className={classes.chartInput}
				inputProps={{
					name: 'tableDisplay',
					id: 'tableDisplayOptions'
				}}
			>
				<option value="history">History</option>
				<option value="allStates">All States</option>
			</Select>
		</FormControl>
	)
}

TableFilters.propTypes = {
	tableDisplay: PropTypes.string,
	changeTableDisplay: PropTypes.func.isRequired
}

TableFilters.defaultProps = {
	tableDisplay: ''
}

export default TableFilters
