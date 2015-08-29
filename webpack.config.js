module.exports = {
	entry: './index.ts',
	output: {
		filename: 'app.js',
		path: 'assets',
		publicPath: 'http://localhost:8080/assets'
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
	}
}
