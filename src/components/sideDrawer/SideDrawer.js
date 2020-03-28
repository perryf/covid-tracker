import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: 240
	},
	listItem: {
		cursor: 'pointer',
		'&:hover': {
			background: '#ddd'
		}
	},
	listItemSelected: {
		background: '#dde'
	}
})

const SideDrawer = props => {
	const { statesInfo, selectState } = props
	const classes = useStyles()

	return (
		<Drawer variant="permanent" className={classes.drawerPaper}>
			<List>
				{statesInfo.map(info => {
					const selected = info.state === selectState
					return (
						<ListItem
							key={info.state}
							className={clsx(
								classes.listItem,
								selected && classes.listItemSelected
							)}
							onClick={() => props.changeState(info.state)}
						>
							{info.name} ({info.state})
						</ListItem>
					)
				})}
			</List>
		</Drawer>
	)
}

SideDrawer.propTypes = {
	selectState: PropTypes.string,
	statesInfo: PropTypes.array.isRequired
}

SideDrawer.defaultProps = {
	selectState: ''
}

export default SideDrawer
