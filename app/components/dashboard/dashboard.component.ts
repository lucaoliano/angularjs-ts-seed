import ngModuleName from './dashboard.module';

'use strict';

const ngComponentName = 'tsfnDashboard';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: require('./dashboard.component.html')
})
@at.inject('$log')
export default class DashboardComponent implements at.OnActivate {
  public title: string;

  public files = [
    [
      require('./dashboard.component.html'),
      require('./dashboard.component.ts'),
      require('./dashboard.module.ts'),
    ], [
      require('./panel/panel-widget.directive.html'),
      require('./panel/panel-widget.directive.ts'),
      require('./panel/panel.module.ts'),
      require('./panel/widget/widget.module.ts'),
    ], [
      require('./panel/widget/visitor.controller.ts'),
      require('./panel/widget/visitor.model.ts'),
      require('./panel/widget/visitor.service.ts'),
      require('./panel/widget/visitor.tpl.html'),
      require('./panel/widget/warning.controller.ts'),
      require('./panel/widget/warning.tpl.html'),
      require('./panel/widget/memory.controller.ts'),
      require('./panel/widget/memory.tpl.html'),
    ], [
      require('./panel/widget/control-panel.controller.ts'),
      require('./panel/widget/control-panel.tpl.html'),
      require('./panel/widget/usage.controller.ts'),
      require('./panel/widget/usage.model.ts'),
      require('./panel/widget/usage.service.ts'),
      require('./panel/widget/usage.tpl.html'),
      require('./panel/widget/autocomplete.controller.ts'),
      require('./panel/widget/autocomplete.tpl.html'),
    ], [
      require('./panel/widget/performance.controller.ts'),
      require('./panel/widget/performance.model.ts'),
      require('./panel/widget/performance.service.ts'),
      require('./panel/widget/performance.tpl.html'),
      require('./panel/widget/todo.controller.ts'),
      require('./panel/widget/todo.model.ts'),
      require('./panel/widget/todo.service.ts'),
      require('./panel/widget/todo.tpl.html'),
    ]
  ];

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $routerOnActivate(next: at.ComponentInstruction) {
    this.title = next.routeData.data['title'];
  }
}
