import main from "./main"


describe("Main", () => {

	test("get data", async (done) => {
		await main(data => {
			console.log(data)
		})
	}, 25000)

})
