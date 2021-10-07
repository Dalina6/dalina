const path = require("path");
const webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },

  pages: {
    index: {
      entry: "./src/main.js",
      title: "Demo_project",
    },
  },

  pluginOptions: {
    i18n: {
      locale: "it",
      fallbackLocale: "it",
      localeDir: "locales",
      enableInSFC: false,
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __INTLIFY_PROD_DEVTOOLS__: false,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
      }),
    ],
  },
};

function addStyleResource(rule) {
  rule
    .use(["style-loader", "css-loader", "sass-loader"])
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/scss/helpers/_functions.scss"),
        path.resolve(__dirname, "./src/scss/helpers/_variables.scss"),
        path.resolve(__dirname, "./src/scss/helpers/_mixins.scss"),
        path.resolve(__dirname, "./src/scss/helpers/_typographic.scss"),
      ],
    });
}
