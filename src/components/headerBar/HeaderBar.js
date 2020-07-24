import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import FormControl from '@material-ui/core/FormControl'
import Toolbar from '@material-ui/core/Toolbar'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	stateInput: {
		margin: '0 18px',
		padding: '2px 12px',
		background: 'white'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	title: {
		flexGrow: 1
	}
}))

const HeaderBar = props => {
	const { selectState, statesInfo, changeState } = props
	const classes = useStyles()

	const changeStateHelper = ({ target: { value } }) => {
		changeState(value)
	}

	return (
		<AppBar position="absolute" className={clsx(classes.appBar)}>
			<Toolbar className={classes.toolbar} variant="dense">
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}
				>
					US COVID 19 Tracker
				</Typography>

				<FormControl>
					<Select
						native
						onChange={changeStateHelper}
						className={classes.stateInput}
						value={selectState}
						inputProps={{
							name: 'stateDisplay',
							id: 'stateOptions'
						}}
					>
						<option value={'us'}>USA</option>
						{statesInfo.map(info => (
							<option key={info.state} value={info.state}>
								{info.state}
							</option>
						))}
					</Select>
				</FormControl>
			</Toolbar>
		</AppBar>
	)
}

HeaderBar.propTypes = {
	selectState: PropTypes.string,
	statesInfo: PropTypes.array,
	changeState: PropTypes.func.isRequired
}

HeaderBar.defaultProps = {
	selectState: '',
	statesInfo: []
}

export default HeaderBar
