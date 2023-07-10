const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const CracoLessPlugin = require("craco-less");
module.exports = {
    reactScriptsVersion: 'react-scripts',
    webpack: {
        alias: {
            '@': resolve("src"),
            'components': resolve("src/components"),
        }
    },
    plugins: [{
        plugin: CracoLessPlugin, options: {
            cssLoaderOptions: {
                modules: { localIdentName: "[local]_[hash:base64:5]" },
            }
        }
    }],
    devServer: {
        // 本地服务的端口号
        port: 3000,
        // 本地服务的响应头设置
        headers: {
            // 允许跨域
            'Access-Control-Allow-Origin': '*',
        },
    },
}