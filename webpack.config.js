const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-shell',
  remotes: {
    mfeReact: "mfeReact@http://localhost:3000/remoteEntry.js",
    // mfeNext: 'mfeNext@http://localhost:3002/_next/static/chunks/remoteEntry.js',
    mfeVue: 'mfeVue@http://localhost:8080/remoteEntry.js',
  },
  exposes: {
    
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion:false ,  eager: false, }),
  },

});
