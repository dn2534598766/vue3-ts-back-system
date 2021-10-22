<!--手机登录的组件 -->
<template>
	<div class="login-phone">
		<el-form :model="phoneForm" :rules="rules" label-width="65px">
			<el-form-item label="手机号" prop="num">
				<el-input v-model="phoneForm.num"></el-input>
			</el-form-item>
			<el-form-item label="验证码" prop="code">
				<div class="code">
					<el-input v-model="phoneForm.code" />
					<el-button type="primary" class="getCode">获取验证码</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
	name: 'login-phone',
	setup() {
		const phoneForm = reactive({
			num: '',
			code: ''
		})
		return {
			phoneForm,
			rules
		}
	}
})
</script>

<style lang="less" scoped>
/deep/ .el-form-item:nth-of-type(2) .el-input {
	width: 55%;
	display: inline-block;
}
/deep/ .el-button {
	padding: 10px;
}
.code {
	display: inline-block;
	.getCode {
		margin-left: 5px;
	}
}
</style>
