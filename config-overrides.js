/* config-overrides.js */
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
module.exports = function override(config, env) {
  //console.log('原webpack配置 config:',config)
  //在这里修改config就行
  //console.log('修改后webpack配置 config:',config)
  // 再在rules数组中添加下面一段代码
  // Less 解析配置
  const newConfig = {
    ...config,
    rules: [
      {
        test: /\.less$/,
        // exclude: [/node_modules/],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
               importLoaders: 1,                  
               modules: true
            },
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to CSS
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "icon-url": "'/public/iconfont/iconfont'"
              }
            }
          }
        ],
      },
  };

  return newConfig;
};
