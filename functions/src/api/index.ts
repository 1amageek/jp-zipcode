import * as express from "express"
import * as admin from "firebase-admin"

const app = express()

app.get("/v1/address", async (req, res) => {
	res.set('Cache-Control', 'public, max-age=604800, s-maxage=604800')
	console.log("[API]", req.query, req.params)

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
