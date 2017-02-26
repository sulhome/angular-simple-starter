let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let AotPlugin = require('@ngtools/webpack').AotPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let appRoot = path.resolve(__dirname, '../..');

module.exports = {
    entry: {
        'vendor': path.join(appRoot, 'src/app/vendor'),
        'app': path.join(appRoot, 'src/app/main')
    },

    output: {
        path: path.join(appRoot, 'dist'),
        filename: '[name].[hash].js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    devServer: {
        historyApiFallback: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
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
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),

        new AotPlugin({
            tsConfigPath: path.join(appRoot, 'tsconfig.json'),
            entryModule: path.join(appRoot, 'src', 'app', 'app.module#AppModule')
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),

        new HtmlWebpackPlugin({
            path: path.join(appRoot, 'dist'),
            filename: 'index.html',
            template: path.join(appRoot, 'config/webpack/template.html')
        }),

        new ExtractTextPlugin({
            filename: "[name].[contenthash].css"
        }),

        new CopyWebpackPlugin([{
            from: path.join(appRoot, 'src/assets')
        }]),

        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify('prod')
            }
        })
    ]
};