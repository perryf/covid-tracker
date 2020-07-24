import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import HeaderBar from '../headerBar/HeaderBar'
import StateInfo from '../stateInfo/StateInfo'
import Chart from '../chart/Chart'
import PieChartDisplay from '../pieChartDisplay/PieChartDisplay'
import TableDisplay from '../tableDisplay/TableDisplay'
import Footer from '../footer/Footer'

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
		overflowX: 'auto',
		overflowY: 'hidden'
	}
}))

const Dashboard = props => {
	const {
		statesCurrent,
		statesHistoric,
		statesInfo,
		usCurrent,
		usHistoric
	} = props

	// * STATE
	const [selectState, setSelectedState] = useState('us')
	const [chartDisplay, setChartDisplay] = useState('positive')
	const [chartDateRange, setChartDateRange] = useState('total')
	const [tableDisplay, setTableDisplay] = useState('history')

	// * METHODS
	const changeState = stateAbr => {
		setSelectedState(stateAbr)
	}
	const changeChartDisplay = ({ target: { value } }) => {
		setChartDisplay(value)
	}
	const changeChartDateRange = ({ target: { value } }) => {
		setChartDateRange(value)
	}
	const changeTableDisplay = ({ target: { value } }) => {
		setTableDisplay(value)
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
			<HeaderBar
				statesInfo={statesInfo}
				selectState={selectState}
				changeState={changeState}
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

						{/* Pie Chart (Only on US View) */}
						{false && ( // * Maybe add in later
							<Grid item xs={6} md={6} lg={6}>
								<Paper className={clsx(classes.paper, classes.chartPaper)}>
									<PieChartDisplay statesCurrent={statesCurrent} />
								</Paper>
							</Grid>
						)}

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
								<TableDisplay
									selectState={selectState}
									tableDisplay={tableDisplay}
									selectStateHistory={selectStateHistory}
									statesCurrent={statesCurrent}
									usCurrent={usCurrent}
									changeTableDisplay={changeTableDisplay}
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

Dashboard.propTypes = {
	statesCurrent: PropTypes.array,
	statesHistoric: PropTypes.array,
	statesInfo: PropTypes.array,
	usCurrent: PropTypes.array,
	usHistoric: PropTypes.array
}

Dashboard.defaultProps = {
	statesCurrent: [],
	statesHistoric: [],
	statesInfo: [],
	usCurrent: [],
	usHistoric: []
}

export default Dashboard
