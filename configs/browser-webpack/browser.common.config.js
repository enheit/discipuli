const browserCommonConfig = {
  name: 'client',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        /**
         * Use babel-loader to execute js/jsx files
         * babel-preset-env for compiling Javascript ES6 code down to ES5
         * babel-preset-react for compiling JSX and other stuff down to Javascript
         */
        use: 'babel-loader'
      },
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      },
    ]
  }
};

export default browserCommonConfig;