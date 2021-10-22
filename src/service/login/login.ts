import qzRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
	AccountLogin = '/login',
	LoginUserInfo = '/users/',
	UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
	return qzRequest.post<IDataType<ILoginResult>>({
		url: LoginAPI.AccountLogin,
		data: account
	})
}

export function requestUserInfoById(id: number) {
	return qzRequest.get<IDataType>({
		url: LoginAPI.LoginUserInfo + id,
		showLoading: false
	})
}

export function requestUserMenusByRoleId(id: number) {
	return qzRequest.get<IDataType>({
		url: LoginAPI.UserMenus + id + '/menu',
		showLoading: false
	})
}
