import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
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

const formatTitle = (selectState, info, currentState) => {
	if (selectState === 'us') {
		return 'USA'
	}
	if (info.name) {
		return `${info.name} (${info.state})`
	}
	return 'Select a State'
}

const useStyles = makeStyles({
	linkStyle: {
		color: '#e33371'
	},
	notes: {
		margin: 4,
		fontStyle: 'italic'
	}
})

const Title = props => {
	const { selectStateInfo, selectStateCurrent, selectState } = props
	const classes = useStyles()

	const title = formatTitle(selectState, selectStateInfo)
	const primaryLink = formatLink(selectStateInfo.covid19Site)
	const secondaryLink = formatLink(selectStateInfo.covid19SiteSecondary)

	return (
		<div>
			<Typography component="h2" variant="h6" color="primary">
				{title}
			</Typography>
			{selectStateCurrent.grade && (
				<Typography component="p" variant="caption" color="textSecondary">
					Data quality grade: {selectStateCurrent.grade}
				</Typography>
			)}
			<div className={classes.linkStyle}>{primaryLink}</div>
			<div className={classes.linkStyle}>{secondaryLink}</div>
			<p className={classes.notes}>{selectStateInfo.notes || ''}</p>
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
