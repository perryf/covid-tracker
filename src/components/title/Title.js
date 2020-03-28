import React from 'react'
import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const formatLink = link => {
	return link ? (
		<Link color="inherit" href={link}>
			{link}
		</Link>
	) : (
		''
	)
}

const Title = props => {
	const { selectStateInfo, selectStateCurrent, selectState } = props

	let title = 'Select a State'

	if (selectState === 'us') {
		title = 'USA'
	}

	if (selectStateInfo.name) {
		title = `${selectStateInfo.name} (${selectStateInfo.state}) ${
			selectStateCurrent.grade ? `[grade: ${selectStateCurrent.grade}]` : ''
		}`
	}

	const primaryLink = formatLink(selectStateInfo.covid19Site)
	const secondaryLink = formatLink(selectStateInfo.covid19SiteSecondary)

	return (
		<div>
			<Typography component="h2" variant="h6" color="primary" gutterBottom>
				{title}
			</Typography>
			<div>{primaryLink}</div>
			<div>{secondaryLink}</div>
			<p>
				{selectStateInfo.notes ? `State notes: ${selectStateInfo.notes}` : ''}
			</p>
		</div>
	)
}
Title.propTypes = {
	children: PropTypes.node,
	selectState: PropTypes.string,
	selectStateInfo: PropTypes.object,
	selectStateCurrent: PropTypes.object
}

Title.defaultProps = {
	selectState: '',
	selectStateInfo: {},
	selectStateCurrent: {}
}

export default Title
