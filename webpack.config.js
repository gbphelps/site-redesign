const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'style.scss'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'style.js'
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}