import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Chart from '../chart/Chart'
import Container from '@material-ui/core/Container'
import Footer from '../footer/Footer'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SideDrawer from '../sideDrawer/SideDrawer'
import { urlStates, urlDaily, urlInfo, urlUSCurrent, urlUSHistoric } from 'data'
import HeaderBar from '../headerBar/HeaderBar'
import TableDisplay from '../tableDisplay/TableDisplay'
import StateInfo from '../stateInfo/StateInfo'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBarSpacer: theme.mixins.toolbar, // Moves main down by amount appBar takes up
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column'
	},
	chartPaper: {
		height: 360
	},
	tablePaper: {
		overflow: 'auto'
	}
}))

const Dashboard = () => {
	const [statesCurrent, setCurrentStates] = useState([])
	const [statesHistoric, setHistoricStates] = useState([])
	const [statesInfo, setInfoStates] = useState([])
	const [usCurrent, setUSCurrent] = useState([])
	const [usHistoric, setUSHistoric] = useState([])
	const [chartDisplay, setChartDisplay] = useState('positive')
	const [chartDateRange, setChartDateRange] = useState('total')
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
	const changeChartDateRange = ({ target: { value } }) => {
		setChartDateRange(value)
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
			<HeaderBar sideOpen={sideOpen} handleDrawerOpen={handleDrawerOpen} />

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
						{/* StateInfo */}
						<Grid item xs={12} md={12} lg={12}>
							<StateInfo
								selectState={selectState}
								selectStateInfo={selectStateInfo}
								selectStateCurrent={selectStateCurrent}
							/>
						</Grid>

						{/* Chart */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={clsx(classes.paper, classes.chartPaper)}>
								<Chart
									selectStateHistory={selectStateHistory}
									chartDisplay={chartDisplay}
									chartDateRange={chartDateRange}
									changeChartDisplay={changeChartDisplay}
									changeChartDateRange={changeChartDateRange}
								/>
							</Paper>
						</Grid>

						{/* Recent Table */}
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={clsx(classes.paper, classes.tablePaper)}>
								<TableDisplay selectStateHistory={selectStateHistory} />
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
