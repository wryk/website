const { resolve } = require('path')

const SOURCE = resolve(__dirname, 'src')
const OUTPUT = resolve(__dirname, 'build')

// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	target: 'web',
	entry: {
		index: resolve(SOURCE, 'index.js')
	},
	output: {
		path: OUTPUT,
		filename: 'app.js'
	},
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: 'file-loader'
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(SOURCE, 'index.pug')
		})
	]
}
