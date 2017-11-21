scripts中 采用定义NODE运行时环境变量的方法进行区分。
其中 set NODE_ENV=xxx 就是设置相应的环境变量，以区分生产和开发环境。
在开发环境设置为dev，生产环境设置为prod。

rimraf dist // 在build时先移除旧有的dist文件夹，此命令不是必须的
            （可以用插件代替）
http-server  ./dist -p 8888 -o  //查看构建后的项目，-o表示打开浏览器

在运行webpack是，默认的配置文件是webpack.config.js ,在此脚手架中，
他只是一个入口文件，根据环境变量来引入相应的配置文件。
