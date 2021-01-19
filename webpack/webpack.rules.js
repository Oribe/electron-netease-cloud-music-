module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.(scss|sass|css)$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }],
  },
  {
    test: /\.(png|jpg|gif|jpeg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 1024,
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: {
        icon: true
        // dimensions: true,
        // typescript: true
      }
    },
  }
];
