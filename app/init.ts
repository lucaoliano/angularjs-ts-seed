/// <reference path="../typings/custom.system.d.ts" />
/// <reference path="../typings/browser.d.ts" />

import './app';

import "./app.css";
import "./index.scss";
import "./stylesheets/_custom.scss";
import "./stylesheets/_table.scss";

// import at = require('angular-typescript');

  angular.module('app'); // .requires.push('tpl');

  angular.element(document).ready(function() {
      console.log('bootstrap start');
      angular.bootstrap(document, ['app']);
      console.log('bootstrap end');
    });
