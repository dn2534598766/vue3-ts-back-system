<!--登录表单组件-->
<template>
	<div class="login-panel">
		<div class="form">
			<h2 class="title">后台管理系统</h2>
			<el-tabs type="card" stretch v-model="currentTab">
				<el-tab-pane name="account">
					<template #label>
						<span><i class="el-icon-user-solid"></i> 账号登录</span>
					</template>
					<!--引入账号登录组件-->
					<login-account ref="accountRef" />
				</el-tab-pane>
				<el-tab-pane name="phone">
					<template #label>
						<span><i class="el-icon-phone"></i> 手机登录</span>
					</template>
					<!--引入手机登录组件-->
					<login-phone ref="phoneRef" />
				</el-tab-pane>
			</el-tabs>
			<div class="help">
				<el-checkbox v-model="isKeepPassword" label="记住密码"></el-checkbox>
				<el-link :underline="false" type="primary">忘记密码</el-link>
			</div>
			<el-button type="primary" class="login" @click="handleLoginClick"
				>登录</el-button
			>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
	name: 'login-panel',
	components: {
		LoginAccount,
		LoginPhone
	},
	setup() {
		//是否记住密码
		const isKeepPassword = ref(true)
		//获取账号登录组件实例
		const accountRef = ref<InstanceType<typeof LoginAccount>>()
		//获取手机登录组件实例
		const phoneRef = ref<InstanceType<typeof LoginPhone>>()
		//选项卡绑定的值
		const currentTab = ref('account')
		//点击登录方法
		const handleLoginClick = () => {
			console.log('立刻登录')
			if (currentTab.value === 'account') {
				accountRef.value?.loginAction(isKeepPassword.value)
			} else {
				console.log('手机登录')
			}
		}
		return {
			isKeepPassword,
			handleLoginClick,
			accountRef,
			currentTab,
			phoneRef
		}
	}
})
</script>

<style lang="less" scoped>
.login-panel {
	width: 320px;
	position: absolute;
	background-color: white;
	border-radius: 5px;
	text-align: center;
	top: 350px;
	right: 200px;
	.form {
		width: 90%;
		margin: auto;
		.help {
			display: flex;
			justify-content: space-between;
		}
		.login {
			width: 100%;
			margin-bottom: 15px;
		}
	}
}
</style>
