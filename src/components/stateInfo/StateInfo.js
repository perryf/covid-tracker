import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const TWITTER_URL = 'https://twitter.com'

const formatLink = link => {
	return link ? (
		<Link color="inherit" href={link}>
			{link}
		</Link>
	) : (
		''
	)
}

const formatTwitter = handle => {
	if (!handle) return ''

	const twitterLink = `${TWITTER_URL}/${handle.replace('@', '')}`

	return handle ? (
		<Link color="inherit" href={twitterLink}>
			{twitterLink}
		</Link>
	) : (
		''
	)
}

const formatTitle = (selectState, info) => {
	if (selectState === 'us') {
		return 'USA'
	}
	if (info.name) {
		return `${info.name} (${info.state})`
	}
	return 'Select a State'
}

const useStyles = makeStyles({
	stateStats: {
		fontSize: 14
	},
	linkStyle: {
		color: '#e33371'
	},
	notes: {
		margin: 4,
		fontStyle: 'italic'
	}
})

const StateInfo = props => {
	const { selectStateInfo, selectStateCurrent, selectState } = props

	const classes = useStyles()
	const title = formatTitle(selectState, selectStateInfo)
	const primaryLink = formatLink(selectStateInfo.covid19Site)
	const secondaryLink = formatLink(selectStateInfo.covid19SiteSecondary)
	const twitterLink = formatTwitter(selectStateInfo.twitter)

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

			<Typography
				component="p"
				variant="body1"
				color="textPrimary"
				className={classes.stateStats}
			>
				Total Positive Cases:{' '}
				{selectStateCurrent.positive
					? selectStateCurrent.positive.toLocaleString()
					: 0}
			</Typography>
			<Typography
				component="p"
				variant="body1"
				color="textPrimary"
				className={classes.stateStats}
			>
				Total Negative Cases:{' '}
				{selectStateCurrent.negative
					? selectStateCurrent.negative.toLocaleString()
					: 0}
			</Typography>
			<Typography
				component="p"
				variant="body1"
				color="textPrimary"
				className={classes.stateStats}
			>
				Total People Tested:{' '}
				{selectStateCurrent.totalTestResults
					? selectStateCurrent.totalTestResults.toLocaleString()
					: 0}
			</Typography>
			<Typography
				component="p"
				variant="body1"
				color="textPrimary"
				className={classes.stateStats}
			>
				Total Deaths:{' '}
				{selectStateCurrent.death
					? selectStateCurrent.death.toLocaleString()
					: 0}
			</Typography>
			<Typography
				component="p"
				variant="body1"
				color="textPrimary"
				className={classes.stateStats}
			>
				Total Hospitalized:{' '}
				{selectStateCurrent.hospitalized
					? selectStateCurrent.hospitalized.toLocaleString()
					: 0}
			</Typography>

			<div className={classes.linkStyle}>{primaryLink}</div>
			<div className={classes.linkStyle}>{secondaryLink}</div>
			<div className={classes.linkStyle}>{twitterLink}</div>

			<p className={classes.notes}>{selectStateInfo.notes || ''}</p>
		</div>
	)
}
StateInfo.propTypes = {
	selectState: PropTypes.string,
	selectStateInfo: PropTypes.object,
	selectStateCurrent: PropTypes.object
}

StateInfo.defaultProps = {
	selectState: '',
	selectStateInfo: {},
	selectStateCurrent: {}
}

export default StateInfo
