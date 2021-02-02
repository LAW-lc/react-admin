# react-admin
react的一个后台框架项目


## 搭建步骤
1. create-react-app  初始化一个react项目

   ```create-react-app demo --template=typescript```
2. 安装 `react-app-rewired customize-cra` 来给项目的添加配置

   * 安装包`yarn add react-app-rewired customize-cra react-app-rewire-hot-loader react-hot-loader --dev`
   
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
     const { override, addWebpackAlias } = require("customize-cra");
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
     );
     ```
   
   * 创建tsconfig.paths.json来解决默认路径设置找不到的问题, 并在tsconfig.json中添加 ` "extends": "./tsconfig.paths.json"`
   
     ```js
     {
         "compilerOptions": {
             "baseUrl": ".",
             "paths": {
                 "@/components/*": [
                     "src/components/*"
                 ],
                 "@/pages/*": [
                     "src/pages/*"
                 ],
                 "@/assets/*": [
                     "src/assets/*"
                 ]
             }
         }
     }
     ```
   
     
   
3. 添加 less、tailwindcss样式配置

   * 安装依赖 `yarn add less less-loader@5.0.0 tailwindcss@compat postcss@^7 autoprefixer@^9 --dev` 

   * 在`config-overrides.js`文件添加 less、tailwindcss配置

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
         // less模块加载
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
         // tailwindcss样式配置
         addPostcssPlugins([require("tailwindcss"), require("autoprefixer")])
       );
       
     ```

4. 项目添加eslint、prettier代码规范配置
   * 安装依赖 `yarn add eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin`
   * 创建 .prettierignore、 .prettierrc.js、.eslintignore、.eslintrc.js文件并进行配置

5. 安装 react-router-dom、 @types/react-router-dom 给项目添加路由，路由配置在项目的src/roouter文件夹里
6. 安装 antd UI框架。 安装axios请求库。 安装 rxjs 工具库给项目的全局状态建立可以传输的通道
7. 添加 tailwind.config.js 文件来配置tailwindcss库没有的样式