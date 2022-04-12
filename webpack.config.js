const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname),
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    devtool: "source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
};
