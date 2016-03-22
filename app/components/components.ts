import Common       from './common/common';
import Example      from './example/example';
import Material      from './material/material';
import Main      from './main/main';
import Dashboard from './dashboard/dashboard';
import Message from './message/message';
import Profile from './profile/profile';
import Table from './table/table';

let components = angular.module('app.components', [
  Common,
  Material,
  Main,
  Dashboard,
  Message,
  Profile,
  Table,

  Example
]);

export {components}
