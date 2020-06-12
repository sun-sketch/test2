const path=require('path')


const htmlWebpackPlugin=require('html-webpack-plugin')
//这个配置文件，起始就是一个JS文件，通过Node 中的模块操作，向外暴露了一个配对象
module.exports={
    entry:'./src/main.js',//入口，表示webpack要打包的文件
    output:{
        path:path.resolve(__dirname,'dist'),//指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js'//指定输出文件的名称
    },
    plugins:[
        new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
            template:path.join(__dirname,'./src/index.html'),//指定模板页面
            //将来根据指定的页面路径，去生成内存中的页面
            filename:'index.html'
        })
    ],
    module:{//配置所以第三方模块加载器
        rules:[//所以第三模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//配置处理.css文件的第三方loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=100809&name=[name].[ext]'},//配置处理.less文件的第三方loader
            //limit给定值，比给定值小则使用base64格式字符串，大于或者等于则不使用
            //name=[name].[ext]使显示出来的文件名还为项目中的名字
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}//处理.vue文件的loader

        ]
    },
    /*resolve:{
     alias:{//修改vue被导入时的包的路径
     "vue$":"vue/dist/vue.js"
     }
     }*/
}

//当我们在控制台,直接输入webpack 命令执行的时候，webpack 做了以下几步:
//1.首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2. webpack 就会去项目的根目录中。查找一个叫做 webpack config .js=” 的配文件
// 3.当找到配置文件后，webpack 会去解析执行这个配文件，当解析执行完配文件后，就得到了配置文件中，导出的配置对象
//4.当webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建;