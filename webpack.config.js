/* eslint-env node */

const path = require('path')

module.exports = {
    context: __dirname,
    entry: './js/App.js',
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    devServer: {
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader'
                },
                include: path.resolve(__dirname, 'js')
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.resolve(__dirname, 'js')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    }
}
