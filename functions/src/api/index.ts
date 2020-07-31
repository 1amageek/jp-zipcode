import * as express from "express"
import * as admin from "firebase-admin"

const app = express()

app.use((req, res, next) => {
	// Set cors
	res.header("Access-Control-Allow-Origin", "*")
	res.header('Access-Control-Allow-Methods', 'GET')
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

	// Set cache
	res.set('Cache-Control', 'public, max-age=604800, s-maxage=604800')
	next()
})

app.get("/v1/address", async (req, res) => {
	console.log("[API]", req.query)
	let { code } = req.query
	if (!code) return res.status(400).send("Invalid request.")
	code = (code as string).replace(/\-/g, "")
	try {
		const snapshot = await admin.firestore().collection("zipcode")
			.where(admin.firestore.FieldPath.documentId(), ">=", code)
			.where(admin.firestore.FieldPath.documentId(), "<", `${code}9`)
			.limit(10)
			.get()
		const addresses = snapshot.docs.map(doc => doc.data())
		return res.status(200).json(addresses)
	} catch (error) {
		return res.status(500).send(`Internal error.: ${error}`)
	}
})

export default app
