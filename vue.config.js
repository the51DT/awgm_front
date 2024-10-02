const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },

  resolve: {
    chainWebpack: (config) => {
      config.resolve.alias.set("@", path.resolve(__dirname, "img/"));
    },
  },
});
