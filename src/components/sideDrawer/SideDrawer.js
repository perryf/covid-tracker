import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		height: '100vh',
		overflowY: 'scroll'
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	listItem: {
		cursor: 'pointer',
		'&:hover': {
			background: '#ddd'
		}
	},
	listItemSelected: {
		background: '#dde'
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	}
}))

const SideDrawer = props => {
	const {
		selectState,
		sideOpen,
		statesInfo,
		changeState,
		handleDrawerClose
	} = props
	const classes = useStyles()

	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !sideOpen && classes.drawerPaperClose)
			}}
			open={sideOpen}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				<ListItem
					className={clsx(
						classes.listItem,
						selectState === 'us' && classes.listItemSelected
					)}
					onClick={() => changeState('us')}
				>
					USA
				</ListItem>
				{statesInfo.map(info => {
					const selected = info.state === selectState
					const label = sideOpen
						? `${info.name || ''} ${info.state ? `(${info.state})` : ''}`
						: info.state

					return (
						<ListItem
							key={info.state}
							className={clsx(
								classes.listItem,
								selected && classes.listItemSelected
							)}
							onClick={() => changeState(info.state)}
						>
							{label}
						</ListItem>
					)
				})}
			</List>
		</Drawer>
	)
}

SideDrawer.propTypes = {
	selectState: PropTypes.string,
	sideOpen: PropTypes.bool.isRequired,
	statesInfo: PropTypes.array,
	changeState: PropTypes.func.isRequired,
	handleDrawerClose: PropTypes.func.isRequired
}

SideDrawer.defaultProps = {
	selectState: '',
	statesInfo: []
}

export default SideDrawer
