import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Chart from '../chart/Chart'
import Deposits from '../deposits/Deposits'
import SideDrawer from '../sideDrawer/SideDrawer'
import Orders from '../orders/Orders'

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`
	},
	title: {
		flexGrow: 1
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
	}
}))

const Dashboard = () => {
	const [statesCurrent, setCurrentStates] = useState([])
	const [statesHistoric, setHistoricStates] = useState([])
	const [selectedState, setSelectedState] = useState('')

	// * Effect
	useEffect(() => {
		const url = 'https://covidtracking.com/api/states'

		fetch(url)
			.then(res => res.json())
			.then(json => {
				console.log(json)
				setCurrentStates(json)
			})
			.catch(err => console.info(err))

		const urlDaily = 'https://covidtracking.com/api/states/daily'

		fetch(urlDaily)
			.then(res => res.json())
			.then(json => {
				console.log(json)
				setHistoricStates(json)
			})
			.catch(err => console.info(err))
	}, [])

	const changeState = stateAbr => {
		setSelectedState(stateAbr)
	}

	const classes = useStyles()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

	const selectedStateInfo = statesCurrent.find(s => s.state === selectedState)
	const selectedStateHistory = statesHistoric.filter(
		s => s.state === selectedState
	)

	console.log(selectedState)
	console.log(selectedStateInfo)
	console.log(selectedStateHistory)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}
					>
						COVID
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Sidebar */}
			<SideDrawer changeState={changeState} />

			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={2}>
						{/* Chart */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={fixedHeightPaper}>
								<Chart
									selectedStateInfo={selectedStateInfo}
									selectedStateHistory={selectedStateHistory}
								/>
							</Paper>
						</Grid>

						{/* Recent Deposits */}
						{false && (
							<Grid item xs={12} md={4} lg={3}>
								<Paper className={fixedHeightPaper}>
									<Deposits />
								</Paper>
							</Grid>
						)}

						{/* Recent Orders */}
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Orders />
							</Paper>
						</Grid>
					</Grid>

					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	)
}

export default Dashboard
