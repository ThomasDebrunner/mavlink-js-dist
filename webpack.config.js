const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const REPO_OWNER = 'ThomasDebrunner'

const DIST_PACKAGE_JSON = {
    name: `mavlink-js-dist`,
    version: '0.0.1',
    main: './mavlink.js',
    repository: {
        type: 'git',
        url: `https://github.com/${REPO_OWNER}/mavlink-js-dist`
    }
}


module.exports = {
  entry: './src/mavlink.js',
  output: {
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    filename: 'mavlink.js',
    library: {
        name: "mavlink",
        type: "umd"
    }
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production",
  plugins: [new GeneratePackageJsonPlugin(DIST_PACKAGE_JSON)]
};