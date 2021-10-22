export const rules = {
	num: [
		{
			required: true,
			message: '手机号不能为空',
			trigger: 'blur'
		},
		{
			pattern: /^1\d{10}$/,
			message: '请输入正确的手机号码',
			trigger: 'blur'
		}
	],
	code: [
		{
			required: true,
			message: '验证码不能为空',
			trigger: 'blur'
		},
		{
			pattern: /^[a-zA-Z0-9]{4}$/,
			message: '请输入四位验证码',
			trigger: 'blur'
		}
	]
}
