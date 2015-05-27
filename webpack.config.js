module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./demo/javascripts/app'
	],
	output: {
		path: __dirname + '/demo/javascripts',
		filename: 'bundle.js',
		publicPath: '/demo/'
	},

	resolve: {
		modulesDirectories: ['node_modules', 'javascripts']
	},

	module: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	}
}