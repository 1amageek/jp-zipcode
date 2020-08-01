import { katakana_han2zen } from "./index"


describe("Util", () => {

	test("Han to Zen", () => {

		const str =
			"ｱｲｳｴｵ" +
			"ｶｷｸｹｺ" +
			"ｻｼｽｾｿ" +
			"ﾀﾁﾂﾃﾄ"
		expect(katakana_han2zen(str)).toEqual("アイウエオカキクケコサシスセソタチツテト")
		console.log(katakana_han2zen(str))

	}, 25000)

})
