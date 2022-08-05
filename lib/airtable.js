const AirtablePlus = require('airtable-plus')

const API_KEY = 'keySQ73BhuBfxaA56'

export const scheduleAirtable = new AirtablePlus({
	baseID: 'appuvNX7oSULIob4c',
	apiKey: API_KEY,
	tableName: 'Events',
})
