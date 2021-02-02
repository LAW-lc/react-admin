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
