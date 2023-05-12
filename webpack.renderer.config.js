const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
},
{
  test: /\.(png|jpe?g|gif|ico|svg|webp)$/, // We will handle of these file extensions
  use: [
    {
      loader: "file-loader",
    }
  ]
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
