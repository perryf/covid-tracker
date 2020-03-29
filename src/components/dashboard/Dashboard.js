import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Chart from '../chart/Chart'
import Container from '@material-ui/core/Container'
import Footer from '../footer/Footer'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import SideDrawer from '../sideDrawer/SideDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { urlStates, urlDaily, urlInfo, urlUSCurrent, urlUSHistoric } from 'data'
import TableDisplay from '../tableDisplay/TableDisplay'
import Title from '../title/Title'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
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
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	menuButton: {
		marginRight: 36,
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	menuButtonHidden: {
		display: 'none'
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column'
	},
	chartPaper: {
		touchAction: 'none',
		height: 320
	},
	tablePaper: {
		overflow: 'auto'
	},
	title: {
		flexGrow: 1
	}
}))

const Dashboard = () => {
	const [statesCurrent, setCurrentStates] = useState([])
	const [statesHistoric, setHistoricStates] = useState([])
	const [statesInfo, setInfoStates] = useState([])
	const [usCurrent, setUSCurrent] = useState([])
	const [usHistoric, setUSHistoric] = useState([])
	const [chartDisplay, setChartDisplay] = useState('positive')
	const [selectState, setSelectedState] = useState('us')
	const [sideOpen, setOpen] = React.useState(false)

	// * Effect
	useEffect(() => {
		fetch(urlStates)
			.then(res => res.json())
			.then(json => setCurrentStates(json))
			.catch(err => console.info(err))

		fetch(urlDaily)
			.then(res => res.json())
			.then(json => setHistoricStates(json))
			.catch(err => console.info(err))

		fetch(urlInfo)
			.then(res => res.json())
			.then(json =>
				setInfoStates(
					json.sort((a, b) => {
						if (a.name < b.name) return -1
						if (b.name < a.name) return 1
						return 0
					})
				)
			)
			.catch(err => console.info(err))

		fetch(urlUSCurrent)
			.then(res => res.json())
			.then(json => setUSCurrent(json))
			.catch(err => console.info(err))

		fetch(urlUSHistoric)
			.then(res => res.json())
			.then(json => setUSHistoric(json))
			.catch(err => console.info(err))
	}, [])

	const changeState = stateAbr => {
		setSelectedState(stateAbr)
	}

	const changeChartDisplay = ({ target: { value } }) => {
		setChartDisplay(value)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	// * STYLES
	const classes = useStyles()

	// * INCLUDES US TOTALS WITH STATES
	const selectStateCurrent =
		selectState === 'us'
			? usCurrent[0]
			: statesCurrent.find(s => s.state === selectState)
	const selectStateHistory =
		selectState === 'us'
			? usHistoric
			: statesHistoric.filter(s => s.state === selectState)
	const selectStateInfo = statesInfo.find(s => s.state === selectState)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, sideOpen && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
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
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}
					>
						COVID 19 Tracker
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Sidebar */}
			<SideDrawer
				sideOpen={sideOpen}
				statesInfo={statesInfo}
				selectState={selectState}
				changeState={changeState}
				handleDrawerClose={handleDrawerClose}
			/>

			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={2}>
						{/* Title */}
						<Grid item xs={12} md={12} lg={12}>
							<Title
								selectState={selectState}
								selectStateInfo={selectStateInfo}
								selectStateCurrent={selectStateCurrent}
							/>
						</Grid>

						{/* Chart */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={clsx(classes.paper, classes.chartPaper)}>
								<Chart
									selectStateCurrent={selectStateCurrent}
									selectStateHistory={selectStateHistory}
									selectStateInfo={selectStateInfo}
									selectState={selectState}
									chartDisplay={chartDisplay}
									changeChartDisplay={changeChartDisplay}
								/>
							</Paper>
						</Grid>

						{/* Recent Table */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={clsx(classes.paper, classes.tablePaper)}>
								<TableDisplay
									selectStateCurrent={selectStateCurrent}
									selectStateHistory={selectStateHistory}
									selectStateInfo={selectStateInfo}
									selectState={selectState}
								/>
							</Paper>
						</Grid>
					</Grid>

					<Box pt={4}>
						<Footer />
					</Box>
				</Container>
			</main>
		</div>
	)
}

export default Dashboard
