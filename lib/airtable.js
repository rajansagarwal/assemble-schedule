const AirtablePlus = require('airtable-plus')

const API_KEY = process.env.AIRTABLE

export const scheduleAirtable = new AirtablePlus({
	baseID: 'appuvNX7oSULIob4c',
	apiKey: API_KEY,
	tableName: 'Events',
})
