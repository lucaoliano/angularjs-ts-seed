import ngModuleName from './profile.module';

'use strict';

const ngComponentName = 'tsfnProfile';

@at.component(ngModuleName, ngComponentName, {
  templateUrl: require('./profile.component.html'),
})
@at.inject('$log')
export default class ProfileComponent implements at.OnActivate {
  public title: string;

  public user = {
    title: 'Admin',
    email: 'contact@flatlogic.com',
    firstName: '',
    lastName: '',
    company: 'FlatLogic Inc.',
    address: 'Fabritsiusa str, 4',
    city: 'Minsk',
    state: '',
    biography: ['We are young and ambitious full service design and technology company.',
      'Our focus is JavaScript development and User Interface design.'].join(' '),
    postalCode: '220007'
  };

  public files = [
    require('./profile.component.html'),
    require('./profile.component.ts'),
    require('./profile.module.ts')
  ];

  constructor(private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $routerOnActivate(next: at.ComponentInstruction) {
    this.title = next.routeData.data['title'];
  }
}
