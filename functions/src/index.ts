import * as admin from "firebase-admin"
import * as functions from "firebase-functions";
import * as express from "express"
import API from "./API"

// Init Firebase
admin.initializeApp()

// Connect API
const app = express()
app.use("/_", API)

export const api = functions.https.onRequest(app)
export * from "./batch"
