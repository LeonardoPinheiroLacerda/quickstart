import logDatabase from "../src/databases/LogDatabase"
import database from "../src/databases/Database"
import testLogDatabase from "../src/databases/TestLogDatabase"
import testDatabase from "../src/databases/TestDatabase"

describe("Databases", () => {
	it("Should query logDatabase", async () => {
		const value = await logDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		logDatabase.destroy()
	})

	it("Should query database", async () => {
		const value = await database.raw("select 1")
		expect(value.rowCount).toBe(1)

		database.destroy()
	})

	it("Should query testDatabase", async () => {
		const value = await testDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		testDatabase.destroy()
	})

	it("Should query testLogDatabase", async () => {
		const value = await testLogDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		testLogDatabase.destroy()
	})
})
