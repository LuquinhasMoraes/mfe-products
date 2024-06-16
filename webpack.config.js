const ModuleFederationPlugin = require('@angular-architects/module-federation/webpack').ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './AppComponent': './src/app/app.component.ts', // Caminho para o componente que você deseja expor
      },
    }),
  ],
};
