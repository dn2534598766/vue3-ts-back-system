module.exports = {
	//配置方式一
	outputDir: './build',
	devServer: {
		proxy: {
			'/api': {
				target: 'http://152.136.185.210:5000',
				pathRewrite: {
					'/api': ''
				},
				changeOrigin: true
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				components: '@/components',
				views: '@/views',
				assets: '@/assets'
			}
		}
	}
	//配置方式二
	// configureWebpack:(config) => {
	//   config.resolve.alias = {
	//     "@":Path2D.resolve(__dirname,"src")
	//     components:'@/components'
	//   }
	// }
	//配置方式三
	// chainWebpack:(config) => {
	//   config.resolve.alias
	//   .set('@',path.resolve(__dirname,'src'))
	//   .set('components','@/components')
	// }
}
