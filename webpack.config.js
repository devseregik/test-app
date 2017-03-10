var
    webpack     = require('webpack')
    path        = require('path')
;

var config = {

    entry: './client.js',

    output  : {
        path        : path.resolve(__dirname, 'public'),
        filename    : 'bundle.js'
    },

    module  : {
		loaders: [
			{
				test 	: /\.jsx?$/,
				exclude	: /node_modules/,
				loader 	: 'babel-loader',
				query	: {
					presets	: ['es2015', 'react']
				}
			},
      		{
      			test       : /\.styl$/,
				loaders    : ['style-loader', 'css-loader', 'stylus-loader']
      		},
            {
      			test       : /\.json$/,
				loader     : 'json-loader'
      		}
		]
	}

};

module.exports = config;
