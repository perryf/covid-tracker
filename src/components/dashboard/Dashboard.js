import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { urlStates, urlDaily, urlInfo, urlUSCurrent, urlUSHistoric } from 'data'
import Chart from '../chart/Chart'
import SideDrawer from '../sideDrawer/SideDrawer'
import TableDisplay from '../tableDisplay/TableDisplay'
import Footer from '../footer/Footer'
import Title from '../title/Title'

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
		height: 320
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

	const classes = useStyles()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

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
						COVID Tracker
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Sidebar */}
			<SideDrawer
				changeState={changeState}
				statesInfo={statesInfo}
				selectState={selectState}
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
							<Paper className={fixedHeightPaper}>
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
						<Grid item xs={12}>
							<Paper className={classes.paper}>
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
