var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'public', 'src','index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'vendor.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loader: 'uglify'
            },
        ]
    }
}