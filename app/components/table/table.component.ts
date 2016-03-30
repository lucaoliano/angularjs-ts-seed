import ngModuleName from './table.module';

import TableService from './table.service';

'use strict';

const ngComponentName = 'tsfnTable';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: require('./table.component.html'),
})
@at.inject('tableService', '$log')
export default class TableComponent implements at.OnInit, at.OnActivate {
  public title: string;
  public tableData = [];

  public files = [
    require('./table.component.html'),
    require('./table.component.ts'),
    require('./table.service.ts'),
    require('./table.module.ts')
  ];

  constructor(private tableService: TableService,
    private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    this.tableService.loadAllItems()
      .then(data => this.tableData = [].concat(data));
  }

  public $routerOnActivate(next: at.ComponentInstruction) {
    this.title = next.routeData.data['title'];
  }
}
