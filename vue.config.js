const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/frontendmentor-calculatorapp',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/style/_themes.scss";
        @import "~@/style/_mixins.scss";
        `,
      },
    },
  },
});
