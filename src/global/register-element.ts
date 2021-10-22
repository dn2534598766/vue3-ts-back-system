import 'element-plus/dist/index.css'
import { App } from 'vue'
import {
	ElAlert,
	ElAside,
	ElButton,
	ElForm,
	ElFormItem,
	ElInput,
	ElRadio,
	ElTabs,
	ElTabPane,
	ElCol,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElMain,
	ElHeader
} from 'element-plus/lib/components'

const components = [
	ElButton,
	ElForm,
	ElFormItem,
	ElInput,
	ElRadio,
	ElAlert,
	ElAside,
	ElTabs,
	ElTabPane,
	ElCol,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElMain,
	ElAside,
	ElHeader
]

export default function (app: App): void {
	for (const component of components) {
		app.component(component.name, component)
	}
}
