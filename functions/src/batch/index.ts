import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import { PubSub } from "@google-cloud/pubsub"

import main from "./main"

export const monthlyDataUpdate = functions
	.region("asia-northeast1")
	.runWith({
		timeoutSeconds: 200,
		memory: "1GB"
	})
	.pubsub
	.schedule("00 0 1 * *").timeZone("Asia/Tokyo")
	.onRun(async () => {
		const pubsub = new PubSub()
		let addresses: any[] = []
		await main(async data => {
			addresses.push(data)
			if (addresses.length === 500) {
				await pubsub.topic("setAddressData").publishJSON({ "data": addresses })
				addresses = []
			}
		})
		await pubsub.topic("setAddressData").publishJSON({ "data": addresses })
	})

export const setAddressData = functions
	.region("asia-northeast1")
	.pubsub
	.topic("setAddressData")
	.onPublish(async (context) => {
		const collectionRef = admin.firestore().collection("zipcode")
		const batch = admin.firestore().batch()
		const addresses: any[] = context.json.data
		addresses.forEach(data => {
			batch.set(collectionRef.doc(data.zipcode), data, { merge: true })
		})
		await batch.commit()
	})
