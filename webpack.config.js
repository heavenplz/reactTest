const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html' //生成内存中首页的
    
})


module.exports = {
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module:{//只要不认识，就从这里找匹配的loader
        rules:[
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias: {
            '@':path.join(__dirname,'./src') //这样@就表示项目根目录中的路径
        }

    }
    
}