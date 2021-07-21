const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    entry: "./src/index.tsx",
    output: {
      publicPath: 'auto',
    },
    mode: "development",
    plugins: [
      new ModuleFederationPlugin({
        name: "addrecipe",
        filename: "remoteEntry.js",
        remotes: {
          recipes: "recipes@http://localhost:3001/remoteEntry.js",
        },
        exposes: {
          "./Navigation": "./src/Navigation",
          "./routes": "./src/routes",
        },
        shared: {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html"
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
      port: 3002,
      contentBase: path.join(__dirname, "dist")
    },
  };
};
