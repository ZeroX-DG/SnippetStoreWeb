const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "Gromsby Demo"
  },
  pathPrefix: "/SnippetStoreWeb",
  plugins: [
    {
      resolve: "custom-sass-loader",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ]
      }
    }
  ]
};
