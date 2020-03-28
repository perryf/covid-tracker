import React from 'react'
import moment from 'moment'
import { useTheme } from '@material-ui/core/styles'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer
} from 'recharts'
import Title from '../title/Title'

// Generate Sales Data
const createData = (time, amount) => {
	return { time, amount }
}

const Chart = props => {
	const { selectedStateInfo = {}, selectedStateHistory = [] } = props
	const theme = useTheme()

	const data = selectedStateHistory
		.slice()
		.reverse()
		.map(day => {
			return createData(
				day.dateChecked ? moment(day.dateChecked).format('MM/DD/YYYY') : '',
				day.positive
			)
		})

	return (
		<React.Fragment>
			<Title>{selectedStateInfo.state}</Title>
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
							# Tested positive
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

export default Chart
