import { ElNotification } from 'element-plus/lib/components'
class Global {
	errorNotic(message: any) {
		ElNotification({
			title: 'Error',
			message: message,
			type: 'error'
		})
	}
}

export default new Global()
