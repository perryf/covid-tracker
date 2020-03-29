import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTheme } from '@material-ui/core/styles'
import {
	AreaChart,
	Area,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts'
import ChartFilters from './ChartFilters'

const getYLabel = type => {
	switch (type) {
		case 'positive':
			return 'Total Tested Positive'

		case 'death':
			return 'Total Deaths'

		case 'totalTestResults':
			return 'Total Tested'

		case 'hospitalized':
			return 'Total Hospitalized'

		case 'positiveIncrease':
			return 'New Positive Cases'

		case 'deathIncrease':
			return 'New Deaths'

		case 'totalTestResultsIncrease':
			return 'New Test Results'

		case 'hospitalizedIncrease':
			return 'New Hospitalized Patients'

		default:
			return ''
	}
}

const filterDateRange = (dayObj, dateType) => {
	switch (dateType) {
		case 'week':
			const lastWeek = moment().subtract(7, 'days')
			return moment(dayObj.dateChecked).isAfter(lastWeek)

		case 'month':
			const lastMonth = moment().subtract(1, 'months')
			return moment(dayObj.dateChecked).isAfter(lastMonth)

		default:
			return true
	}
}

const createData = (time, amount) => {
	return { time, amount }
}

const Chart = props => {
	const { selectStateHistory, chartDisplay, chartDateRange } = props
	const theme = useTheme()

	// * Chart/Filter Display Options
	const displayType = chartDisplay || 'positive'
	const isAreaChart = !chartDisplay.includes('Increase')

	// * Chart Data
	const data = selectStateHistory
		.filter(day => filterDateRange(day, chartDateRange))
		.slice()
		.reverse()
		.map(day => {
			return createData(
				day.dateChecked ? moment(day.dateChecked).format('MM/DD/YYYY') : '',
				day[displayType] || 0
			)
		})

	// * Chart Customized Inserts
	const xAxis = <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
	const yAxis = (
		<YAxis stroke={theme.palette.text.secondary}>
			<Label
				angle={270}
				position="left"
				style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
			>
				{getYLabel(displayType)}
			</Label>
		</YAxis>
	)
	const cartesianGrid = <CartesianGrid strokeDasharray="3 3" />
	const toolTip = <Tooltip />

	// * Chart Gradients (for Area Chart)
	const chartGradients = (
		<defs>
			<linearGradient id="main" x1="0" y1="0" x2="0" y2="1">
				<stop
					offset="5%"
					stopColor={theme.palette.primary.main}
					stopOpacity={0.8}
				/>
				<stop
					offset="95%"
					stopColor={theme.palette.primary.main}
					stopOpacity={0}
				/>
			</linearGradient>
		</defs>
	)

	return (
		<Fragment>
			<ChartFilters {...props} />

			<ResponsiveContainer minHeight={290}>
				{isAreaChart ? (
					<AreaChart
						data={data}
						margin={{ top: 8, right: 8, bottom: 0, left: 12 }}
					>
						{chartGradients}
						{xAxis}
						{yAxis}
						{cartesianGrid}
						{toolTip}
						<Area
							type="linear"
							dataKey="amount"
							stroke={theme.palette.primary.main}
							fillOpacity={1}
							fill="url(#main)"
						/>
					</AreaChart>
				) : (
					<LineChart
						data={data}
						margin={{ top: 8, right: 8, bottom: 0, left: 12 }}
					>
						{xAxis}
						{yAxis}
						{cartesianGrid}
						{toolTip}
						<Line
							type="linear"
							dataKey="amount"
							stroke={theme.palette.primary.main}
							dot={false}
						/>
					</LineChart>
				)}
			</ResponsiveContainer>
		</Fragment>
	)
}

Chart.propTypes = {
	selectStateHistory: PropTypes.array,
	chartDisplay: PropTypes.string,
	chartDateRange: PropTypes.string,
	changeChartDisplay: PropTypes.func.isRequired, // * Passed down to Filters
	changeChartDateRange: PropTypes.func.isRequired // * Passed down to Filters
}

Chart.defaultProps = {
	chartDisplay: '',
	chartDateRange: '',
	selectStateHistory: []
}

export default Chart
