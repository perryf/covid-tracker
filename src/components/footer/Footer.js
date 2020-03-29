import React, { Fragment } from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Footer = () => (
	<Fragment>
		<Typography variant="body2" color="textSecondary" align="center">
			<Link color="inherit" href="https://github.com/perryf/covid-tracker">
				US COVID 19 Tracker Source Code
			</Link>
			<span style={{ fontStyle: 'italic' }}> © Perry Fustero 2020</span>
		</Typography>
		<Typography variant="body2" color="textSecondary" align="center">
			{'All data from '}
			<Link color="inherit" href="https://covidtracking.com/">
				The COVID Tracking Project
			</Link>
		</Typography>
	</Fragment>
)

export default Footer
