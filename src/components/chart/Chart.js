import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer
} from 'recharts'

const getYLabel = type => {
	switch (type) {
		case 'positive':
			return 'Total Positive'

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

const useStyles = makeStyles({
	formControl: {
		marginBottom: 6
	},
	chartOptions: {
		display: 'flex',
		flexDirection: 'row'
	},
	dataLabel: {
		fontSize: '0.8rem'
	},
	radioButton: {
		padding: 4
	}
})

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
		changeChartDisplay
	} = props

	const theme = useTheme()
	const classes = useStyles()

	const displayType = chartDisplay || 'positive'
	const yLabel = getYLabel(displayType)

	const data = selectStateHistory
		.slice()
		.reverse()
		.map(day => {
			return createData(
				day.dateChecked ? moment(day.dateChecked).format('MM/DD/YYYY') : '',
				day[displayType] || 0
			)
		})

	return (
		<React.Fragment>
			<FormControl className={classes.formControl}>
				<RadioGroup
					aria-label="displayOptions"
					name="displayOptions"
					className={classes.chartOptions}
					value={chartDisplay}
					onChange={changeChartDisplay}
				>
					<FormControlLabel
						value="positive"
						control={
							<Radio size="small" classes={{ root: classes.radioButton }} />
						}
						classes={{ label: classes.dataLabel }}
						label="Positive Cases"
					/>
					<FormControlLabel
						value="death"
						control={
							<Radio size="small" classes={{ root: classes.radioButton }} />
						}
						classes={{ label: classes.dataLabel }}
						label="Deaths"
					/>
					<FormControlLabel
						value="totalTestResults"
						control={
							<Radio size="small" classes={{ root: classes.radioButton }} />
						}
						classes={{ label: classes.dataLabel }}
						label="Tested"
					/>

					<FormControlLabel
						value="hospitalized"
						control={
							<Radio size="small" classes={{ root: classes.radioButton }} />
						}
						classes={{ label: classes.dataLabel }}
						label="Hospitalized"
					/>
				</RadioGroup>
			</FormControl>

			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{
						top: 8,
						right: 8,
						bottom: 0,
						left: 12
					}}
				>
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
					<Line
						type="monotone"
						dataKey="amount"
						stroke={theme.palette.primary.main}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	)
}

Chart.propTypes = {
	selectState: PropTypes.string,
	chartDisplay: PropTypes.string,
	selectStateInfo: PropTypes.object,
	selectStateCurrent: PropTypes.object,
	selectStateHistory: PropTypes.array,
	changeChartDisplay: PropTypes.func.isRequired
}

Chart.defaultProps = {
	selectState: '',
	selectStateInfo: {},
	selectStateCurrent: {},
	selectStateHistory: []
}

export default Chart