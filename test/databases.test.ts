import logDatabase from "../src/databases/LogDatabase"
import prodDatabase from "../src/databases/ProductionDatabase"
import testDatabase from "../src/databases/TestDatabase"

describe("Databases", () => {
	it("Should query logDatabase", async () => {
		const value = await logDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		logDatabase.destroy()
	})

	it("Should query productionDatabase", async () => {
		const value = await prodDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		prodDatabase.destroy()
	})

	it("Should query logDatabase", async () => {
		const value = await testDatabase.raw("select 1")
		expect(value.rowCount).toBe(1)

		testDatabase.destroy()
	})
})
