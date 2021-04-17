//引入一个包
const path=require('path');
//引入html插件
const HTMLWebpackPlugin=require('html-webpack-plugin');
//引入clean插件
const {CleanWebpackPlugin}=require('clean-webpack-plugin');


//webpack中的所有的配置信息都应该写在module.exports中
module.exports={
   //指定入口文件
   entry:"./src/index.ts",
   //指定打包文件所在目录
   output: {
      //指定打包文件的目录
      path: path.resolve(__dirname,'dist'),
      //打包后文件的文件
      filename: "bundle.js",

     //告诉webpack不使用箭头
  environment:{
        arrowFunction:false,
    const:false
      }
   },

   //指定webpack打包时要使用模块
   module: {
      //指定要加载的规则

      rules: [
         {
          //test指定的是规则性生效的文件
          test:/\.ts$/,
            //要使用的loader

           use:[
             //配置babel
             {
               //指定加载器
               loader: "babel-loader",
               //设置babel
               options: {
                 //设置预定义的环境
                 presets:[
                   //指定环境的插件
                   ["@babel/preset-env",
                   //配置信息
                   {
                     //要兼容的目标浏览器
                     targets:{
                       "edge":"90"
                     },
                     //指定core.js的版本
                     "corejs":"3",
                     //使用core.js的方式“usage” 表示按需加载
                     "useBuiltIns":"usage"
                   }
                 ]
                     ]
               }
             },
             'ts-loader'
           ],
            //要排除的文件
            exclude: /node_modules/
         },
          //设置less文件的处理
        {
          test:/\.less$/,
          use:
              [
                  //从下往上执行，最下面的最先执行
                "style-loader",
                "css-loader",
                  //引入postcss
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-preset-env",
                          {
                            browsers: 'last 2 versions'
                          }
                        ]
                      ]
                    }
                  }
                },
                "less-loader"
              ]
        }
      ]
   },

  //配置webpack插件
  plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        //自定义标题
        // title: "这是一个自定义标题",
        //定义模板
        template: "./src/index.html"
      }),
  ],

  //用来设置引用模块
  resolve: {
    extensions: ['.ts','.js']
  }
//设置less文件的处理

}