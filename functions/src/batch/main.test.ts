import main from "./main"


describe("Main", () => {

	test("get data", async () => {
		let addresses: any[] = []
		await main(async data => {
			addresses.push(data)
			if (addresses.length === 500) {
				console.log(addresses.length)
				addresses = []
			}
		})
		console.log(addresses.length)
	}, 25000)

})
