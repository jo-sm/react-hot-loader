# ES6 React Hot Loader

This is a fork of the [React Hot Loader](http://github.com/gaearon/react-hot-loader/) library which has the following changes: separates files into a `dist` folder instead of a single file, removes production use code (e.g. this is only suitable for development use), and which removes Webpack code and instead only includes relevant Babel.js code. 

The original library has been changed to handle my specific use case, which is a custom tooling setup using Rollup, Facebook watchman, and a custom "Livereload" daemon which handles Hot Module Reloading similarly to SystemJS. This is not intended to replace the original, but you may find it useful if you use a setup similar to mine. 

Thanks to [Dan Abramov](https://github.com/gaearon/) for his work on this!

## License
MIT

