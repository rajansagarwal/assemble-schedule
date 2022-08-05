import Head from 'next/head'
// import { useState } from 'react'
import { scheduleAirtable } from '../lib/airtable'

export default function Home() {
	// const [events, setEvents] = useState([])
	const array = []

	;(async () => {
		try {
			const readEvents = await scheduleAirtable.read({})
			for (let i = 0; i < readEvents.length; i++) {
				//setEvents((events) => [...events, readEvents[i]])
				array[i] = readEvents[i].fields
			}
			console.log(array)
		} catch (e) {
			console.error(e)
		}
	})()

	return (
		<ol>
			{array.map((item, index) => {
				return <li key={index}>{item?.Name}</li>
			})}
		</ol>
	)
}
