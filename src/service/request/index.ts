import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { QZRequestInterceptors, QZRequestConfig } from './type'

import { ElLoading } from 'element-plus/lib/components'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

import global from '@/utils/global'
const DEFAULT_LOADING = true

class QZRequest {
	instance: AxiosInstance
	interceptors?: QZRequestInterceptors
	showLoading: boolean
	loading?: ILoadingInstance
	constructor(config: QZRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		this.showLoading = config.showLoading ?? DEFAULT_LOADING

		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)
		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)

		//添加所有实例都有的拦截器
		this.instance.interceptors.request.use(
			(config) => {
				console.log('所有实例的请求成功拦截')
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: DEFAULT_LOADING,
						text: 'Loading',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					})
				}
				return config
			},
			(err) => {
				console.log('所有实例请求失败拦截')
				return err
			}
		)
		this.instance.interceptors.response.use(
			(res) => {
				global.errorNotic(res)
				console.log('所有实例响应成功拦截')
				this.loading?.close()
				console.log(res)
				const data = <any>res.data
				return data
			},
			(err) => {
				console.log('所有实例响应失败拦截')
				return err
			}
		)
	}
	request<T>(config: QZRequestConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}
			if (config.showLoading === false) {
				this.showLoading = config.showLoading
			}
			this.instance
				.request<any, T>(config)
				.then((res) => {
					console.log(res)
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res)
					}
					this.showLoading = DEFAULT_LOADING
					resolve(res)
				})
				.catch((err) => {
					this.showLoading = DEFAULT_LOADING
					reject(err)
					return err
				})
		})
	}

	get<T>(config: QZRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'GET' })
	}
	post<T>(config: QZRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'POST' })
	}
	delete<T>(config: QZRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'DELETE' })
	}
	patch<T>(config: QZRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'PATCH' })
	}
}

export default QZRequest
