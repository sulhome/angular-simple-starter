'use strict';
let webpack = require('webpack');
let path = require('path');

let appRoot = path.resolve(__dirname, '../..');

module.exports = {
    entry: {
        'app': path.join(appRoot, 'src/app/main')
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },

    plugins: [
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify('test')
            }
        })
    ]
};