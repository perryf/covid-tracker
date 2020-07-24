import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTheme } from '@material-ui/core/styles'
import {
	AreaChart,
	Area,
	BarChart,
	Bar,
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
			return 'Daily Positive Cases'

		case 'deathIncrease':
			return 'Daily Deaths'

		case 'totalTestResultsIncrease':
			return 'Daily Test Results'

		case 'hospitalizedIncrease':
			return 'Daily Hospitalized'

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

const createData = (time, amount) => ({ time, amount })

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
				day.dateChecked ? moment(day.dateChecked).format('M/DD/YY') : '',
				day[displayType] || 0
			)
		})

	// * Chart Customized Inserts
	const xAxis = <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
	const yAxis = (
		<YAxis
			stroke={theme.palette.text.secondary}
			tickFormatter={tick => (!isNaN(tick) ? tick.toLocaleString() : '')}
		>
			<Label
				angle={270}
				position="left"
				offset={20}
				style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
			>
				{getYLabel(displayType)}
			</Label>
		</YAxis>
	)
	const cartesianGrid = <CartesianGrid strokeDasharray="3 3" />
	const toolTip = (
		<Tooltip formatter={val => (!isNaN(val) ? val.toLocaleString() : '')} />
	)

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
						margin={{ top: 8, right: 8, bottom: 0, left: 30 }}
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
					<BarChart
						data={data}
						margin={{ top: 8, right: 8, bottom: 0, left: 30 }}
					>
						{xAxis}
						{yAxis}
						{cartesianGrid}
						{toolTip}
						<Bar dataKey="amount" fill={theme.palette.primary.main} />
					</BarChart>
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
