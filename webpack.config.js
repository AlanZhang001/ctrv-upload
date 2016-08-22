var webpack = require('webpack');

module.exports = {
    entry:'./src/index.js',
    plugins:[/*new webpack.optimize.UglifyJsPlugin({
        compress:{
            drop_console:true
        }
    })*/],
    output:{
        library:'ctrlVUtil',
        libraryTarget:'umd',
        filename:'./index.js'
    }
};