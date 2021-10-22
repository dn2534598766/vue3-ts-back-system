import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import {
	accountLoginRequest,
	requestUserInfoById,
	requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router/index'

const loginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			//token值
			token: '',
			//用户信息
			userInfo: {},
			//用户列表
			userMenus: []
		}
	},
	getters: {},
	mutations: {
		changeToken(state, token: string) {
			state.token = token
		},
		changeUserInfo(state, userInfo: any) {
			state.userInfo = userInfo
		},
		changeUserMenus(state, userMenus: any) {
			state.userMenus = userMenus
		}
	},
	actions: {
		async accountLoginAction({ commit }, payload: any) {
			// 1.实现登录逻辑
			const loginResult = await accountLoginRequest(payload)
			const { id, token } = loginResult.data
			commit('changeToken', token)
			localCache.setCache('token', token)

			// 2.请求用户信息
			const userInfoResult = await requestUserInfoById(id)
			const userInfo = userInfoResult.data
			commit('changeUserInfo', userInfo)

			// 3.请求用户菜单
			const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
			const userMenus = userMenusResult.data
			commit('changeUserMenus', userMenus)

			// 4.跳转到用户首页
			router.push('/main')
		},
		//如果本地缓存有这些值，就把他们存到vuex里
		loadLocalLogin({ commit }) {
			const token = localCache.getCache('token')
			if (token) {
				commit('changeToken', token)
			}
			const userInfo = localCache.getCache('userInfo')
			if (userInfo) {
				commit('changeUserInfo', userInfo)
			}
		}
	}
}

export default loginModule
