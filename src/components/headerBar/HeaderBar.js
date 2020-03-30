import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	stateInput: {
		margin: '0 18px',
		padding: '2px 8px',
		background: 'white'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	menuButton: {
		marginRight: 36,
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	}
}))

const HeaderBar = props => {
	const { sideOpen, handleDrawerOpen, statesInfo, changeState } = props
	const classes = useStyles()

	const changeStateHelper = ({ target: { value } }) => {
		changeState(value)
	}

	return (
		<AppBar
			position="absolute"
			className={clsx(classes.appBar, sideOpen && classes.appBarShift)}
		>
			<Toolbar className={classes.toolbar} variant="dense">
				{false && ( // * Delete if no longer needed
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							sideOpen && classes.menuButtonHidden
						)}
					>
						<MenuIcon />
					</IconButton>
				)}
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
					>
						<option value={'us'}>USA</option>
						{statesInfo.map(info => {
							return (
								<option key={info.state} value={info.state}>
									{info.state}
								</option>
							)
						})}
					</Select>
				</FormControl>
			</Toolbar>
		</AppBar>
	)
}

HeaderBar.propTypes = {
	sideOpen: PropTypes.bool.isRequired,
	handleDrawerOpen: PropTypes.func.isRequired
}

export default HeaderBar
