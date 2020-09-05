module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/build',
    filename: 'main.js',
    sourceMapFilename: "[file].map",
    devtoolModuleFilenameTemplate: info =>
      `webpack:///${info.absoluteResourcePath.replace(/\\/g, '/')}`
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['svg-inline-loader']
      },
    ]
  },
};