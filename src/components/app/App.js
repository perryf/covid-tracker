import React, { useState, useEffect } from 'react'
import { urlStates, urlDaily, urlInfo, urlUSCurrent, urlUSHistoric } from 'data'
import Dashboard from '../dashboard/Dashboard'
import './App.css'

const App = () => {
	// * State Init
	const [statesCurrent, setCurrentStates] = useState([])
	const [statesHistoric, setHistoricStates] = useState([])
	const [statesInfo, setInfoStates] = useState([])
	const [usCurrent, setUSCurrent] = useState([])
	const [usHistoric, setUSHistoric] = useState([])

	// * Effect
	useEffect(() => {
		fetch(urlStates)
			.then(res => res.json())
			.then(json => setCurrentStates(json))
			.catch(err => console.info(err))

		fetch(urlDaily)
			.then(res => res.json())
			.then(json => setHistoricStates(json))
			.catch(err => console.info(err))

		fetch(urlInfo)
			.then(res => res.json())
			.then(json =>
				setInfoStates(
					json.sort((a, b) => {
						if (a.name < b.name) return -1
						if (b.name < a.name) return 1
						return 0
					})
				)
			)
			.catch(err => console.info(err))

		fetch(urlUSCurrent)
			.then(res => res.json())
			.then(json => setUSCurrent(json))
			.catch(err => console.info(err))

		fetch(urlUSHistoric)
			.then(res => res.json())
			.then(json => setUSHistoric(json))
			.catch(err => console.info(err))
	}, [])

	return (
		<Dashboard
			statesCurrent={statesCurrent}
			statesHistoric={statesHistoric}
			statesInfo={statesInfo}
			usCurrent={usCurrent}
			usHistoric={usHistoric}
		/>
	)
}

export default App
