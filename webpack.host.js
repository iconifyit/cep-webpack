const path                   = require('path'),
      webpack                = require('webpack'),
      HtmlWebpackPlugin      = require('html-webpack-plugin'),
      MiniCssExtractPlugin   = require('mini-css-extract-plugin'),
      CopyWebpackPlugin      = require('copy-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode    : 'development',
    entry : {
        host : path.resolve(__dirname, 'src/host/index.jsx')
    },
    output : {
        filename : 'host.bundle.jsx',
        path     : path.resolve(__dirname, 'dist', 'host'),
    },
    plugins : [
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     _      : 'lodash',
        //     path   : 'path',
        //     fs     : 'fs',
        //     $      : "jquery",
        //     jQuery : "jquery",
        //     "window.jQuery" : "jquery"
        // }),
        // new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/client/index.html')}),
        // new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"}),
        // new CopyWebpackPlugin([
        //     {
        //         from : 'src/host/host.bundle.js',  // Will resolve to RepoDir/src/assets
        //         to   : 'host/bundle.js'            // Copies all files from above dest to dist/assets
        //     }
        // ])
    ],
    module : {
        rules : [
            {
                test: /\.(js|jsx)$/,
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
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}