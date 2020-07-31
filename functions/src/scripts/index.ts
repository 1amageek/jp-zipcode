import * as https from "https"
import * as AdmZip from "adm-zip"

const file_url = "https://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip"

interface ZipCodeData {
	name: string
	data: Buffer
}

export const getZipCodeData = (url: string) => {
	return new Promise<ZipCodeData>((resolve, reject) => {
		https.get(file_url, (res) => {
			const data: any[] = []
			let dataLen = 0

			res.on('data', (chunk) => {
				data.push(chunk)
				dataLen += chunk.length
			})

			res.on('end', () => {
				const buf = Buffer.alloc(dataLen)
				let pos = 0
				for (let i = 0; i < data.length; i++) {
					data[i].copy(buf, pos)
					pos += data[i].length
				}
				const zip = new AdmZip(buf)
				const zipEntries = zip.getEntries()
				const zipEntry = zipEntries[0]
				resolve({
					name: zipEntry.entryName,
					data: zipEntry.getData()
				})
			});
		});
	})
}
