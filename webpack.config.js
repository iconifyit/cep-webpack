const path                 = require('path'),
      webpack              = require('webpack'),
      HtmlWebpackPlugin    = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        client : './src/client/index.js',
        host   : './src/host/index.jsx'
    },
    output : {
        filename : '[name].js',
        path     : path.resolve(__dirname, 'dist')
    },
    plugins : [
        new webpack.ProvidePlugin({ _ : 'lodash' }),
        new HtmlWebpackPlugin({template: './src/client/index.html'}),
        new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})
    ],
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { "presets": ["@babel/preset-env"] }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                ],
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}