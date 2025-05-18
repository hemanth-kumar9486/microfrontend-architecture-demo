const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  
  publicPath: 'auto',
  configureWebpack: {
    output: {
      // publicPath: 'auto',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'mfeVue',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld.vue': './src/components/HelloWorld.vue',
          './Widget': './src/components/Widget.vue',
           './App': './src/App.vue', 
        },
        shared: {
          vue: {
            singleton: true,
            eager: false,
            requiredVersion: false,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
 