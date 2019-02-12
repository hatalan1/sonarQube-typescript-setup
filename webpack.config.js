module.exports = {
    entry: [
      './src/helloComponent/helloComponent.ts'
    ],    
    module: {
      loaders: [
        {
          test: /\.tsx?$/,          
          exclude: /node_modules/,
          loader: 'babel-loader!ts-loader',
          
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            compact: false,
            "plugins": [
            ["transform-runtime", {
                    "polyfill": false,
                    "regenerator": true
            }]
            ],
            
            "presets": [
            ["es2015", { "modules": false }]
            ]
          }
        }        
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      libraryTarget: 'window'
    }
  };