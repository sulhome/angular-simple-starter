let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let appRoot = path.resolve(__dirname, '../..');

module.exports = {
    entry: {
        'vendor': path.join(appRoot, 'src/app/vendor'),
        'app': path.join(appRoot, 'src/app/main')
    },

    output: {
        path: path.join(appRoot, 'dist'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),

        new HtmlWebpackPlugin({
            path: path.join(appRoot, 'dist'),
            filename: 'index.html',
            template: path.join(appRoot,'config/webpack/template.html')
        }),

        new CopyWebpackPlugin([{
            from: path.join(appRoot, 'src/assets')
        }]),

        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify('dev')
            }
        })
    ]
};