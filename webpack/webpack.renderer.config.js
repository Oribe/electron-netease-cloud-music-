const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const path = require('path')


module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@components": path.resolve(__dirname, '../src/components'),
      "@assets": path.resolve(__dirname, '../src/assets'),
      "@styles": path.resolve(__dirname, '../src/styles'),
      "@pages": path.resolve(__dirname, '../src/pages'),
      "@src": path.resolve(__dirname, '../src'),
    },
  },
};
