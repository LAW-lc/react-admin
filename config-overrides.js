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
  