const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common ,{
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // 2.  Inject styles into DOM
                    "css-loader" // 1. Turns css into commonjs
                ],
            },
        ]
    }
});