var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  addVendor: function (name, path) {
   this.resolve.alias[name] = path;
   this.module.noParse.push(new RegExp('^' + name + '$'));
   this.entry.vendor.push(name);
  },
  addApp: function (name, path) {
   this.resolve.alias[name] = path;
   this.module.noParse.push(new RegExp('^' + name + '$'));
   this.entry.app.push(name);
  },
    entry: {
      app: ['./app/init.ts'],
      //vendor: ['angular'].concat(angular),
      vendor: []

    },
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json'],
        alias: []
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new ExtractTextPlugin("[name].css")
    ],
    module:{
        loaders: loaders,
        noParse: []
    }
};

var modules_dir = __dirname + '/../node_modules';
var app_dir = __dirname + '/../app';

//module.exports.addVendor('es6-module-loader-sans-promises', modules_dir + '/es6-module-loader/dist/es6-module-loader-sans-promises.js');
//module.exports.addVendor('es6-module-loader-sans-promises.map', modules_dir + '/es6-module-loader/dist/es6-module-loader-sans-promises.js.map');
//module.exports.addVendor('system.src', modules_dir + '/systemjs/dist/system.src.js');
module.exports.addVendor('angular', modules_dir + '/angular/angular.js');
module.exports.addVendor('angular_1_router', modules_dir + '/@angular/router/angular1/angular_1_router.js');
module.exports.addVendor('angular-aria', modules_dir + '/angular-aria/angular-aria.js');
module.exports.addVendor('angular-animate', modules_dir + '/angular-animate/angular-animate.js');
module.exports.addVendor('angular-messages', modules_dir + '/angular-messages/angular-messages.js');
module.exports.addVendor('angular-material', modules_dir + '/angular-material/angular-material.js');
module.exports.addVendor('angular-cookies', modules_dir + '/angular-cookies/angular-cookies.js');
// module.exports.addVendor('angular-1-router', modules_dir + '/angular-touch/angular-touch.js');
module.exports.addVendor('angular-sanitize', modules_dir + '/angular-sanitize/angular-sanitize.js');

module.exports.addVendor('d3', modules_dir + '/d3/d3.js');
module.exports.addVendor('nv.d3', modules_dir + '/nvd3/build/nv.d3.js');
module.exports.addVendor('angular-nvd3', modules_dir + '/angular-nvd3/dist/angular-nvd3.js');

module.exports.addVendor('codemirror', modules_dir + '/codemirror/lib/codemirror.js');
module.exports.addVendor('meta', modules_dir + '/codemirror/mode/meta.js');
module.exports.addVendor('css', modules_dir + '/codemirror/mode/css/css.js');
module.exports.addVendor('xml', modules_dir + '/codemirror/mode/xml/xml.js');
module.exports.addVendor('javascript', modules_dir + '/codemirror/mode/javascript/javascript.js');
module.exports.addVendor('htmlmixed', modules_dir + '/codemirror/mode/htmlmixed/htmlmixed.js');
module.exports.addVendor('sass', modules_dir + '/codemirror/mode/sass/sass.js');
module.exports.addVendor('autorefresh', modules_dir + '/codemirror/addon/display/autorefresh.js');
module.exports.addVendor('ui-codemirror', modules_dir + '/angular-ui-codemirror/src/ui-codemirror.js');

module.exports.addVendor('at-angular', modules_dir + '/angular-typescript/lib/at-angular.js');
module.exports.addVendor('at-angular-resource', modules_dir + '/angular-typescript/lib/at-angular-resource.js');
//module.exports.addVendor('at-angular.map', modules_dir + '/angular-typescript/lib/at-angular.js.map');
//module.exports.addVendor('at-angular-resource.map', modules_dir + '/angular-typescript/lib/at-angular-resource.js.map');

module.exports.addVendor('angular-material.css', modules_dir + '/angular-material/angular-material.css');
module.exports.addVendor('nv.d3.css', modules_dir + '/nvd3/build/nv.d3.css');
module.exports.addVendor('codemirror.css', modules_dir + '/codemirror/lib/codemirror.css');
module.exports.addVendor('material.css', modules_dir + '/codemirror/theme/material.css');

/*module.exports.addApp('app.css', app_dir + '/app.css');
module.exports.addApp('index.scss', + '/index.scss');
module.exports.addApp('_custom.scss', + '/app/stylesheets/_custom.scss');
module.exports.addApp('_table.scss', + '/stylesheets/_table.scss');*/

/*
var wrench = require('wrench');
var htmlRegExp = new RegExp(".html$");
var files = wrench.readdirSyncRecursive(path.resolve(__dirname, '..', 'app'));
files.filter(function(file) { return htmlRegExp.test(file); })
     .forEach(function(file) {
       if(file !== 'index.html'){
       var f = path.resolve(__dirname, '..', 'app', file)
       console.log(f);
       module.exports.addApp(f, f);
     }
     });
*/
