const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
},
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',

    },
    devtool: 'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
            test: /\.css$/,
            use: ['style-loader' , 'css-loader', 'sass-loader']
            ,
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.html|htm$/,
            use: ['html-loader']
          },
    ],

    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Financial Decisions',
            filename: 'index.html',
            template: 'src/template.html',
            favicon: './src/assets/favicon.png',
        }),
        new HtmlWebpackPlugin({
            template: './src/compoundCalculator.html',
            filename: 'compoundCalculator.html', 
          }),
          
          new HtmlWebpackPlugin({
              template: './src/chapterOne.html',
              filename: 'chapterOne.html',
            }),
            new HtmlWebpackPlugin({
              template: './src/chapterTwo.html',
              filename: 'chapterTwo.html', 
            }),
            new HtmlWebpackPlugin({
                template: './src/chapterThree.html',
                filename: 'chapterThree.html', 
              }),      

          new HtmlWebpackPlugin({
            template: './src/chapterFour.html',
            filename: 'chapterFour.html', 
          }),
          new HtmlWebpackPlugin({
            template: './src/chapterJoke.html',
            filename: 'chapterJoke.html',
          }),
      
    ],
}