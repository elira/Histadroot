module.exports = {
	entry: "./index.ts",
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	
	//for dev only ( generated code)
	//devtool: 'eval',
	devtool: 'eval-source-map',
	
	//for production:
	//devtool: 'source-map'
	//devtool: 'inline-source-map'
	
	//enable es6 in project
	module: {
		loaders: [
			{test: /\.ts$/, loader: 'babel-loader', exclude: '/node_modules'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
			{test: /\.png$/, loader: 'url-loader'}
		]
	}
	
};