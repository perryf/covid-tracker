import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Label,
	Tooltip,
	Cell
} from 'recharts'

const getRand = () => {
	return Math.floor(Math.random() * 120) + 80
}

const createData = (name, value) => {
	return { name, value }
}

const PieChartDisplay = props => {
	const { statesCurrent } = props
	const theme = useTheme()

	// * Chart Data
	const data = statesCurrent.map(s => createData(s.state, s.positive))

	return (
		<Fragment>
			<Typography component="h4" variant="subtitle1" color="primary">
				Positive Cases by state
			</Typography>
			<ResponsiveContainer minHeight={290}>
				<PieChart width={300} height={300}>
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

					<Tooltip />
					<Pie data={data} dataKey="value" nameKey="name" fill="url(#main)">
						{data.map((_, index) => {
							const rand1 = getRand()
							const rand2 = getRand()
							const rand3 = getRand()
							const fillColor = `rgb(${rand1}, ${rand2}, ${rand3})`

							return <Cell key={`cell-${index}`} fill={fillColor} />
						})}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

PieChartDisplay.propTypes = {
	statesCurrent: PropTypes.array
}

PieChartDisplay.defaultProps = {
	statesCurrent: []
}

export default PieChartDisplay
