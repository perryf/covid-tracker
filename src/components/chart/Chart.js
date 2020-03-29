import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import {
	AreaChart,
	Area,
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
	const {
		selectStateInfo,
		selectStateCurrent,
		selectStateHistory,
		selectState,
		chartDisplay,
		chartDateRange
	} = props

	const theme = useTheme()

	const displayType = chartDisplay || 'positive'
	const yLabel = getYLabel(displayType)

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

	return (
		<Fragment>
			<ChartFilters {...props} />

			<ResponsiveContainer minHeight={290}>
				<AreaChart
					data={data}
					margin={{
						top: 8,
						right: 8,
						bottom: 0,
						left: 12
					}}
				>
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

					<XAxis dataKey="time" stroke={theme.palette.text.secondary} />
					<YAxis stroke={theme.palette.text.secondary}>
						<Label
							angle={270}
							position="left"
							style={{
								textAnchor: 'middle',
								fill: theme.palette.text.primary
							}}
						>
							{yLabel}
						</Label>
					</YAxis>

					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />

					<Area
						type="linear"
						dataKey="amount"
						stroke={theme.palette.primary.main}
						fillOpacity={1}
						fill="url(#main)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

Chart.propTypes = {
	selectStateInfo: PropTypes.object,
	selectStateCurrent: PropTypes.object,
	selectStateHistory: PropTypes.array,
	selectState: PropTypes.string,
	chartDisplay: PropTypes.string,
	chartDateRange: PropTypes.string,
	changeChartDisplay: PropTypes.func.isRequired,
	changeChartDateRange: PropTypes.func.isRequired
}

Chart.defaultProps = {
	selectState: '',
	selectStateInfo: {},
	selectStateCurrent: {},
	selectStateHistory: []
}

export default Chart

// <LineChart
// 	data={data}
// 	margin={{
// 		top: 8,
// 		right: 8,
// 		bottom: 0,
// 		left: 12
// 	}}
// >
// 	<XAxis dataKey="time" stroke={theme.palette.text.secondary} />
// 	<YAxis stroke={theme.palette.text.secondary}>
// 		<Label
// 			angle={270}
// 			position="left"
// 			style={{
// 				textAnchor: 'middle',
// 				fill: theme.palette.text.primary
// 			}}
// 		>
// 			{yLabel}
// 		</Label>
// 	</YAxis>
// 	<Line
// 		type="monotone"
// 		dataKey="amount"
// 		stroke={theme.palette.primary.main}
// 		dot={false}
// 	/>
// </LineChart>

// <FormControl className={classes.formControl}>
// 	<RadioGroup
// 		aria-label="displayOptions"
// 		name="displayOptions"
// 		className={classes.chartOptions}
// 		value={chartDisplay}
// 		onChange={changeChartDisplay}
// 	>
// 		<FormControlLabel
// 			value="positive"
// 			control={
// 				<Radio size="small" classes={{ root: classes.radioButton }} />
// 			}
// 			classes={{ label: classes.dataLabel }}
// 			label="Positive Cases"
// 		/>
// 		<FormControlLabel
// 			value="death"
// 			control={
// 				<Radio size="small" classes={{ root: classes.radioButton }} />
// 			}
// 			classes={{ label: classes.dataLabel }}
// 			label="Deaths"
// 		/>
// 		<FormControlLabel
// 			value="totalTestResults"
// 			control={
// 				<Radio size="small" classes={{ root: classes.radioButton }} />
// 			}
// 			classes={{ label: classes.dataLabel }}
// 			label="Tested"
// 		/>

// 		<FormControlLabel
// 			value="hospitalized"
// 			control={
// 				<Radio size="small" classes={{ root: classes.radioButton }} />
// 			}
// 			classes={{ label: classes.dataLabel }}
// 			label="Hospitalized"
// 		/>
// 	</RadioGroup>
// </FormControl>
