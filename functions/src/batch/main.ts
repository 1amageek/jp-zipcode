import * as iconv from "iconv-lite"
import * as csv from "csvtojson"
import { getZipCodeData } from "../scripts"

const ZIPCODE_FILE_URL = "https://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip"

interface Data {
	zipcode: string
	state_kana: string
	city_kana: string
	town_kana: string | null
	state: string
	city: string
	town: string | null
}

export default async (callback: (data: Data) => Promise<void>) => {
	const file = await getZipCodeData(ZIPCODE_FILE_URL)
	const decoded = iconv.decode(file.data, "shiftjis")
	return new Promise<void>((resolve, reject) => {
		csv({
			noheader: true,
			output: "line"
		})
			.fromString(decoded)
			.subscribe(async line => {
				if (typeof line !== "string") return
				const data = line.split(",").map(value => value.replace(/\"/g, ""))
				const zipcode = data[2]
				const state_kana = data[3]
				const city_kana = data[4]
				const town_kana = data[5] === "ｲｶﾆｹｲｻｲｶﾞﾅｲﾊﾞｱｲ" ? null : data[5]
				const state = data[6]
				const city = data[7]
				const town = data[8] === "以下に掲載がない場合" ? null : data[8]
				await callback({
					zipcode,
					state_kana,
					city_kana,
					town_kana,
					state,
					city,
					town,
				})
			})
			.then(() => {
				resolve()
			})
	})
}
