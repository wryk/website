const { resolve } = require('path')

const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const SOURCE = resolve(__dirname, 'src')
const OUTPUT = resolve(__dirname, 'build')

module.exports = {
	target: 'web',
	context: __dirname,
	entry: {
		index: resolve(SOURCE, 'index.js')
	},
	output: {
		path: OUTPUT,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: 'file-loader'
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			}
		]
	},
	plugins: [
		new CleanPlugin(OUTPUT),
		new HtmlPlugin({
			template: resolve(SOURCE, 'index.pug')
		}),
		new ExtractTextPlugin('index.css')
	]
}
