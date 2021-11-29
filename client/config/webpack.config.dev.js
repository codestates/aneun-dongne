'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
let SpritesmithPlugin = require('webpack-spritesmith');

var isDebug = true;

function flagsNameTempl(data) {};
let spritePlugin = new SpritesmithPlugin({});

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    entry: [
        // must be first entry to properly set public path
        './src/webpack-public-path',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle-[name].js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            // (gif|png|jpe?g|svg)
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            // .less
            {
                test: /(\.less)$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader?sourceMap']
            },
            /* .css */
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: isDebug,
                            minimize: !isDebug,
                            discardComments: {
                                removeAll: true
                            },
                        },
                    },
                ],
            },
            /* theme.scss */
            {
                test: /theme.scss$/,
                loaders: [
                    "style-loader",
                    `css-loader?${isDebug ? 'sourceMap&' : 'minimize&'}modules&localIdentName=[local]&importLoaders=2`,
                    'sass-loader',
                ],
            },
            /* application.scss */
            {
                test: /application.scss$/,
                use: [{
                    loader: "style-loader",
                },
                {
                    loader: `css-loader?${isDebug ? 'sourceMap&' : 'minimize&'}importLoaders=2`,
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        path: path.resolve(__dirname),
                    }
                },
                {
                    loader: 'sass-loader',
                },
                ],
            },
            /* .scss */
            {
                test: /\.scss$/,
                exclude: [/theme.scss$/, /application.scss$/],
                use: [
                    'isomorphic-style-loader',
                    `css-loader?${isDebug ? 'sourceMap&' : 'minimize&'}modules&localIdentName=${isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'}&importLoaders=2`,
                    {
                        loader: 'postcss-loader',
                        options: {
                            path: path.resolve(__dirname),
                        }
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    devServer: {
        port: 4000,
        open: true,
        proxy: {
            "/": "http://localhost"
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true,
            options: {
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, 'src', 'scss'),
                        path.resolve(__dirname, 'src', 'styles', 'scss')
                    ]
                },
                lessLoader: {
                    includePaths: [
                        path.resolve(__dirname, 'src', 'less'),
                        path.resolve(__dirname, 'src', 'styles', 'less')
                    ]
                },
                context: '/',
                postcss: () => [autoprefixer],
            }
        })
    ],
    target: 'web',
    devtool: 'eval-source-map',
};