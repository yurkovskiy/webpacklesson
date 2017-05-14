// webpack config
"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");	
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: "./home",
	output: {
		filename: "bundle.js",
		library: "home"
	},

	watch: NODE_ENV == "development",

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV == "development" ? "inline-source-map" : false,

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		//new UglifyJSPlugin()
	],

	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["env"]
				}
			}
		}]
	}
};

if (NODE_ENV == "production") {
	module.exports.plugins.push(
		new UglifyJSPlugin({
			drop_console: true
		})
		);
}