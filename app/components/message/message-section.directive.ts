import ngModuleName from './message.module';

'use strict';

const ngDirectiveName = 'tsfnMessageSection';

@at.directive(ngModuleName, ngDirectiveName, {
  restrict: 'E',
  scope: {},
  bindToController: {
    title: '@',
    theme: '@',
    messages: '='
  },
  templateUrl: require('./message-section.directive.html')
})
export default class MessagesSectionDirective {
}
