import { useEffect, useState } from 'react'
import { scheduleAirtable } from '../lib/airtable'

export default function Home() {
	const [events, setEvents] = useState([])

	;(async () => {
		try {
			const array = []
			const readEvents = await scheduleAirtable.read({
				view: 'Grid view',
			})
			for (let i = 0; i < readEvents.length; i++) {
				array[i] = readEvents[i].fields
			}
			setEvents(array)
		} catch (e) {
			console.error(e)
		}
	})()

	return (
		<ul>
			{events.map((item, index) => {
				let start = new Date(item['Start Time'])
				let end = new Date(item['End Time'])
				return (
					<li key={index}>
						<b>
							{start.getDate() === '5' ? 'Friday' : 'Saturday'} August{' '}
							{start.getDate()}, {start.getUTCHours()}
							{start.getUTCMinutes() > 0 ? ':30' : null} - {end.getDate()}
							{end.getUTCMinutes() > 0 ? ':30' : null}
						</b>{' '}
						{item.Name} ({item.Description})
					</li>
				)
			})}
		</ul>
	)
}
