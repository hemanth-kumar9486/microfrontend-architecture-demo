const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "mfeReact",
          filename: "remoteEntry.js",
          exposes: {
            "./Widget": "./src/Widget",
            './App': './src/App.js',
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion:false },
            "react-dom": { singleton: true, eager: true, requiredVersion: false},
          },
        })
      );
      return webpackConfig;
    },
  },
};
