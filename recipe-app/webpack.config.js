const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: (pathData) => {
        return pathData.chunk.name === "main" ? "assets/js/recipe-app.bundle.js" : "assets/js/[name].[contenthash:8].bundle.js";
      },
      publicPath: "/",
      clean: true,
    },
    mode: isProduction ? "production" : "development",
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin({ extractComments: isDevelopment, exclude: /.*index.tsx$/ })],
      usedExports: !isProduction,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        inject: true,
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: isDevelopment ? path.resolve(__dirname, "tsconfig.dev.json") : path.resolve(__dirname, "tsconfig.prod.json"),
            },
          },
        },
      ],
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true,
    },
  };
};
