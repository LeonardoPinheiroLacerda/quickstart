import knex from 'knex'

const database = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		port: 5432,
		user: 'quickstart_test',
		password: 'quickstart_test',
		database: 'quickstart_test',
	},
})

export default database
