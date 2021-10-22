<template>
	<div class="main">
		<el-container class="container">
			<el-aside width="210px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Main',
	setup() {
		return {}
	}
})
</script>

<style lang="less" scoped>
.main {
	height: 100%;
}
.el-container {
	height: 100%;
}
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: black;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 260px;
}

.el-main {
	background-color: #e9eef3;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}
</style>
