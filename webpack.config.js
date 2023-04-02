const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports  = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules: [
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader']
                    ,
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]
}