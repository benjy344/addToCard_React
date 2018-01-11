let webpack 	= require('webpack')
let path    	= require('path')

let BUILD_DIR 	= path.resolve(__dirname, 'src/public')
let APP_DIR 	= path.resolve(__dirname, 'src/app')

let config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/src/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
		      test: /\.(js|jsx)$/,
		      exclude: /node_modules/,
		      loader: ['react-hot-loader/webpack', 'babel-loader']
		    }]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
		]
}

if (process.env.NODE_ENV != 'production') {
  	config.plugins.push(new webpack.NamedModulesPlugin())
  	config.entry = ['react-hot-loader/patch', config.entry]
}

module.exports = config