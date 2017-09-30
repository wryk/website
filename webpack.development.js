const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader']
			}
		]
	}
})
