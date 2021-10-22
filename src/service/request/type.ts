import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface QZRequestInterceptors<T = AxiosResponse> {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	responseInterceptor?: (res: T) => T
	responseInterceptorCatch?: (error: any) => any
}

export interface QZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: QZRequestInterceptors<T>
	showLoading?: boolean
}
