const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require ('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require('webpack');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';




module.exports = {
    mode: mode,
    performance: { hints: false },

    entry: './src/index.js',
    output:{
        filename:'index.js',
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: "images/[hash][ext][query]"
    },



    module:{
        rules:[
            {
                test: /\.(png|jpg|gif|svg|ico)$/i,
                type: "asset/resource",
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
            },
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins:[ new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template:"./src/index.html",
        
        }, 
        
    
    )],
    

    devtool: "source-map",
    devServer: {           
        static: path.join(__dirname, './public'),
        hot: true,
        historyApiFallback: true,

    }


}