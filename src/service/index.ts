import QZRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'
const qzRequest = new QZRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor: (config) => {
			const token = localCache.getCache('token')
			console.log(config)
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		requestInterceptorCatch: (err) => {
			return err
		},
		responseInterceptor: (res) => {
			return res
		},
		responseInterceptorCatch: (err) => {
			return err
		}
	}
})

export default qzRequest
