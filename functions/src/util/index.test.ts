import { katakana_han2zen } from "./index"


describe("Util", () => {

	test("Han to Zen", () => {

		const str =
			"ｱｲｳｴｵ" +
			"ｶｷｸｹｺ" +
			"ｻｼｽｾｿ" +
			"ﾀﾁﾂﾃﾄ" +
			"ﾅﾆﾇﾈﾉ" +
			"ﾊﾋﾌﾍﾎ" +
			"ﾏﾐﾑﾒﾓ" +
			"ﾔﾕﾖ" +
			"ﾗﾘﾙﾚﾛ" +
			"ﾜｦﾝ"
		expect(katakana_han2zen(str)).toEqual("アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン")
		console.log(katakana_han2zen(str))

	}, 25000)

})
