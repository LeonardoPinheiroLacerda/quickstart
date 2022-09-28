import knex from "knex"

const database = knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		port: 5432,
		user: "quickstart_log",
		password: "quickstart_log",
		database: "quickstart_log",
	},
})

export default database
