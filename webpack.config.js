var webpack = require("webpack");

module.exports = {
	entry: './index.ts',
	output: {
		filename: 'app.js',
		path: 'assets',
		publicPath: '/assets/'
	},
	module: {
		loaders: [{
			test: /\.tsx?$/,
			loader: 'ts-loader'
		}]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.tsx', '.ts']
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
