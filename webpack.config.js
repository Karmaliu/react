//获取NODE运行时的环境变量从webpack.json中获取的
//正则 去除目标字符串 左右两边的空格。 ^是开始 \s是空白 *表示0个或多个 |是或者 $是结尾 g表示全局
const env =process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/g,"");
//根据环境变量引入相应的配置文件
const config =requier('./config/webpack.${env}.js')(env);
//导出此模块
module.exports=config;
