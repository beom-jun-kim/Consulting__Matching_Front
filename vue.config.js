const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("hwp")
      .test(/\.hwp$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "files/[name].[ext]", // Adjust the output directory and filename as needed
      })
      .end();
  },
});
