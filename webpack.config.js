const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Specify the root directory for serving files
    },  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: /src/,
      },
    ],
  },
};