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
					presets	: ['es2015', 'react', 'stage-0']
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
	},

    plugins: [
        new webpack.DefinePlugin({
            'ENV_DEV'   : JSON.stringify(process.env.NODE_ENV == 'dev'),
            'ENV_PROD'  : JSON.stringify(process.env.NODE_ENV == 'prod')
        }),
    ]

};

module.exports = config;
