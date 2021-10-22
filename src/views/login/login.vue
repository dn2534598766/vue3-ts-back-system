<!--登录页 -->
<template>
	<div class="login">
		<!--引入登录的表单-->
		<login-panel />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
	name: 'login',
	components: {
		LoginPanel
	},
	setup() {
		return {}
	}
})
</script>

<style lang="less" scoped>
.login {
	height: 100%;
	background: url('~assets/img/bg.png') no-repeat;
}
</style>
