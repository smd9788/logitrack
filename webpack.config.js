// Import Webpack npm module
const webpack = require('webpack')
const path = require('path')
module.exports = {
  // Which file is the entry point to the application
  entry: './shipment_manager/client/src/index.js',
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js']
  },
  // Where to output the final bundled code to
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './shipment_mnanager/client/{% static "client/bundle.js" %}')
  },
  module: {
    // How to process project files with rules
    rules: [
      // Process any .js or .jsx file with Babel
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }
          ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }
      }
    ]
  }
}