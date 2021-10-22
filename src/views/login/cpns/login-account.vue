<!-- 账号登录的组件 -->
<template>
	<div class="login-account">
		<el-form
			:model="accountForm"
			:rules="rules"
			label-width="55px"
			ref="JFormRef"
		>
			<el-form-item label="账号" prop="name">
				<el-input v-model="accountForm.name" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="accountForm.password" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
export default defineComponent({
	name: 'login-account',
	setup() {
		//获取vuex中的数据
		const store = useStore()
		//表单绑定的数据
		const accountForm = reactive({
			name: localCache.getCache('name') ?? '',
			password: localCache.getCache('password') ?? ''
		})
		//获取表单组件实例
		const JFormRef = ref<InstanceType<typeof ElForm>>()
		//在父组件点击登录的时候触发的方法
		const loginAction = (isKeepPassword: boolean) => {
			JFormRef.value?.validate((valid) => {
				if (valid) {
					console.log('真正执行登录逻辑')
					//判断是否需要记住密码
					if (isKeepPassword) {
						//本地缓存
						localCache.setCache('name', accountForm.name)
						localCache.setCache('password', accountForm.password)
						store.dispatch('login/accountLoginAction', { ...accountForm })
					}
				}
			})
		}
		return {
			accountForm,
			rules,
			loginAction,
			JFormRef
		}
	}
})
</script>

<style lang="less" scoped></style>
