module.exports = {
	entry: './index.jsx',
	output: {
		filename: 'app.js',
		path: 'assets',
		publicPath: 'http://localhost:8080/assets'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'jsx-loader?insertPragma=React.DOM&Harmony'
		}]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
