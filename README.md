# react-admin
react的一个后台框架项目


## 搭建步骤
1. create-react-app  初始化一个react项目

   ```create-react-app demo --template=typescript```
2. 安装 `react-app-rewired customize-cra` 来给项目的添加配置

   * 安装包`yarn add react-app-rewired customize-cra --dev`
   
   * 修改package.json文件的 scripts 属性
   
     ```js
     "scripts": {
         "start": "react-app-rewired start",
         "build": "react-app-rewired build",
         "test": "react-app-rewired test",
         "eject": "react-app-rewired eject"
       },
     ```
   
     
   
   * 根目录创建`config-overrides.js`文件添加配置
   
     ```js
     const {
       override,
       addWebpackAlias,
       addLessLoader,
       addPostcssPlugins,
     } = require("customize-cra");
     const rewireReactHotLoader = require("react-app-rewire-hot-loader");
     const path = require("path");
     
     module.exports = override(
       // 默认路径设置
       addWebpackAlias({
         "@/components": path.resolve(__dirname, "src/components"),
         "@/pages": path.resolve(__dirname, "src/pages"),
         "@/assets": path.resolve(__dirname, "src/assets"),
       }),
       (config, env) => {
         config = rewireReactHotLoader(config, env);
         return config;
       },
       addLessLoader({
         strictMath: true,
         noIeCompat: true,
         modifyVars: {
           "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
         },
         cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
         cssModules: {
           localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
         },
       }),
       addPostcssPlugins([require("tailwindcss"), require("autoprefixer")])
     );
     
     ```