const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(.png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name].[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin(),
  //     new HtmlWebPackPlugin({
  //       template: "./src/index.html",
  //       minify: {
  //         removeComments: true,
  //         removeAttributeQuotes: true,
  //         removeTagWhitespace: true,
  //         collapseWhitespace: true,
  //       },
  //     }),
  //   ],
  // },
};
