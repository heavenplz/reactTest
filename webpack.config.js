const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html', //生成内存中首页的
    chunks: ['index','main','chunk','bundle']
})


module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename:'[name].[hash].chunk.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{//只要不认识，就从这里找匹配的loader
        rules:[
            {
                test:/\.js|jsx$/,
                use:['babel-loader','lazyload-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.ttf|.woff|.woff2|.eot|.svg|.jpg$/,
                use:['url-loader']
            },//打包处理字体文件的 loader
            {
                test:/\.scss$/,
                use:['style-loader','css-loader?modules','sass-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json','.css'],
        alias: {
            '@':path.join(__dirname,'./src') //这样@就表示项目根目录中的路径
        }
    }
    ,
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
    
}