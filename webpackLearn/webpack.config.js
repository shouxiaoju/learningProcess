const path = require("path"); // node.js中的模块，用来处理路径。
module.exports={
    // 入口
    entry: './src/main.js',
    // 输出
    output:{
        //文件的输出路径
        path:path.resolve(__dirname,"dist"), // 绝对路径 __dirname代办当前文件的文件夹目录。
        //文件名
        filename:"main.js",
    },
    // 加载器
    module:{
        rules:[
            //loader的规则
            {
                test: /\.css$/i, // 只检测以.css结尾的文件
                use: [
                    "style-loader", //把 CSS资源通过style标签的形式插入到 DOM 中。
                    "css-loader" // 解析css资源
                ], // 执行顺序，从右往左，或者从下往上。先执行css loader后执行style loader
            },
            {
                test: /\.less$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
              },
              {
                test: /\.(png|jpg|jpeg)$/i,
                type: 'asset',
               parser: {
                 dataUrlCondition: {
                   maxSize: 60 * 1024 // 5kb
                 }
               }
              }
        ],
    },
    //插件
    plugins:[
        // plugin的规则
    ],
    //模式
    mode:"development",
}