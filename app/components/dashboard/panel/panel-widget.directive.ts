import ngModuleName from './panel.module';

import './widget/visitor.tpl.html'

'use strict';

const ngDirectiveName = 'tsfnPanelWidget';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'E',
  replace: true,
  // transclude: true,
  scope: {},
  bindToController: {
    title: '@',
    template: '@',
    options: '@'
  },
  templateUrl: require('./panel-widget.directive.html')
  // compile: (element, attrs, linker) => (scope, element) => {
  //   linker(scope, clone => {
  //     element.append(clone);
  //   });
  // }
})
export default class PanelWidgetDirective {
}
