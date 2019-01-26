//  path 模块是一个 node.js 核心模块 用于操作文件路径
const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    // 入口
    entry: {
        // 左面是自定义的名字 右面是源文件的路径
        'index': './src/index.js'
    },
    // 出口
    output: {
        // 路径 __dirname指当前文件 dist是目标文件夹 必须是绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 在dist中生成的被打包好的文件 [name]表示与入口自定义的名字相同
        filename: '[name].js',
    },
     // 服务
     devServer: {
        // 设置基本路径结构
        contentBase: path.resolve(__dirname, 'dist'),
        // 服务器IP 可以使用localhost
        host: 'localhost',
        // 是否开启服务器压缩
        compress: true,
        // 端口号
        port: 8081,
        // 自动开启页面
        open: true,
        // 服务器热更新
        hot: true
    },
    // 插件 用于生产模板和各项功能
    plugins: [
        // 热更新所需要的插件
        new webpack.HotModuleReplacementPlugin(),
        // HTML文件打包
        new HtmlPlugin({
            minify: {
                // 去掉html标签属性的双引号
                removeAttributeQuotes: true,
                // 折叠空白区域
                // collapseWhitespace: true
            },
            // 为了开发中js有缓存效果 所以加入hash 这样可以有效避免缓存js
            hash: true,
            // 是要打包的html模板路径和文件名称
            template: './src/index.html',
            filename: 'test.html',
        }),
        new ExtractTextPlugin('./css/index.css'),
        // 清除未使用的css
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        // 引入第三方类库 并且这种方式是使用了才会引入 推荐
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        // 资源拷贝 不打包（如文档）
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    // 模块：例如解读css 图片如何转换 压缩
    module: {
        rules: [
            // {
            //     // css打包与分离
            //     test: /\.css$/,// 正则表达式 匹配.css后缀文件
            //     // use: ['style-loader', 'css-loader']
            //     //分离css
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader'
            //     })
            // },
            {
                // sass打包与分离
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                // 分离sass
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                // css中引用图片
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        // 输出路径 img文件夹下的图片
                        outputPath: 'img/'
                    }
                }]
            },
            {
                // html文件中的图片打包
                test: /\.htm|html$/i,
                loader: 'html-withimg-loader'
            },
            {
                // css3前缀 使用时需要注释掉css打包分离
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    }, 'postcss-loader']
                })
            },
            {
                // babel es6转es5
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
}