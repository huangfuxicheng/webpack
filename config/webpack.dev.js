//1．该文件是webpack的配置文件，所有webpack的任务、用到的loader、plugins都要配置在这里
// 2．该文件要符合CJS模块化规范


//引入Node中一个内置的path模块，专门用于解决路径问题
const path = require('path');
//引入html-webpack-plugin,用于加工html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

//使用CJS的模块化规范，暴露一个对象，该对象就是webpack的详细配置对象（规则）
const baseCSS = ['style-loader', 'css-loader']
module.exports = {
    mode: 'development',//工作模式
    entry: './src/js/app.js',//入口
    output: {//出口（输出）
        path: path.resolve(__dirname, 'build'),//输出文件的路径
        filename: 'js/app.js',//输出文件的名字
        clean: true
    },
    //module.rules中配置的一个一个的loader
    module: {
        rules: [
            //css
            {
                test: /\.css$/,//该loader要处理的文件
                use: [
                    ...baseCSS
                ]
            },
            //lss
            {
                test: /\.less$/,//该loader要处理的文件
                use: [
                    ...baseCSS,
                    'less-loader'
                ]
            },
            //配置解析样式中的图片
            {
                test: /\.(png|jpg|gif|bmp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    // [ext]前面自带"."
                    filename: 'assets/img/[hash:8].[name][ext]',  //自定义输出目录
                }
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    },
//plugins中专门用于配置插件，插件必须经过实例化这一环节
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})],
    devServer: {
        port:8080,//开启服务器的端口号
        open: true,//自动打开浏览器
        hot: true
    }
}