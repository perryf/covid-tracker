import React, { useState, useEffect } from 'react'
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
	}
})

const SideDrawer = props => {
	// * State
	const [statesInfo, setStatesData] = useState([])

	// * Effect
	useEffect(() => {
		const url = 'https://covidtracking.com/api/states/info'

		fetch(url)
			.then(res => res.json())
			.then(json => setStatesData(json))
			.catch(err => console.info(err))
	}, [])

	const classes = useStyles()

	return (
		<Drawer variant="permanent" className={classes.drawerPaper}>
			<List>
				{statesInfo.map(info => {
					return (
						<ListItem
							key={info.state}
							className={classes.listItem}
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

export default SideDrawer
