const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192, // in bytes
                        name: 'images/[name].[ext]',
                      },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192, // in bytes
                        name: 'fonts/[name].[ext]',
                      },
                    },
                  ],
            },
        ],
    }, 
};