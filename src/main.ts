import { createApp } from 'vue'
import { registerApp } from './global'

import { setupStore } from '@/store/index'

import App from './App.vue'

import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
//每次初始化页面调用此方法，相当于页面刷新会去拿本地缓存的值保存到vuex
//防止vuex刷新就清空的问题
setupStore()
app.mount('#app')
