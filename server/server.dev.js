// Dependensies
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

// Environment
const ENV = process.env.NODE_ENV;

// Up development server
const config = require('../webpack.config');

if (!Array.isArray(config.entry)) {
    throw new Error('Webpack entry property must be an array');
}

config.entry.unshift(
    'webpack-dev-server/client?http://localhost:4000/',
    'webpack/hot/dev-server'
);

new webpackDevServer(webpack(config), {
    contentBase : './public/',
    hot         : true,
    inline      : true,
    stats       : {
        colors: true
    }
}).listen(4000, 'localhost', (err, result) => {
    if (err) console.log(err)

    console.log(`Development server listening on port 4000...`);
});
