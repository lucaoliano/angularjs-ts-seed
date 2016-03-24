import ngModuleName from './showcase.module';

import ShowcaseService from './showcase.provider';

'use strict';

interface ITab {
  title: string;
  options: any;
  content: string;
}

const ngComponentName = 'tsfnShowcase';

@at.component(ngModuleName, ngComponentName, {
  bindings: {
    fileList: '<',
    title: '@'
  },
  templateUrl: 'showcase/showcase.component.html'
})
@at.inject('showcase', '$log')
export default class ShowcaseComponent implements at.OnInit {
  public fileList: string[];

  public showSource = false;
  public selected = 0;
  public tabs: ITab[] = [];

  private modes = {
    html: 'htmlmixed',
    js: 'javascript',
    json: { name: 'javascript', json: true },
    scss: 'sass',
    ts: { name: 'javascript', typescript: true }
  };

  constructor(private showcase: ShowcaseService, private log: angular.ILogService) {
    log.debug(['ngComponent', ngComponentName, 'loaded'].join(' '));
  }

  public $onInit() {
    // this.fileList.push('components/showcase/showcase.scss');
    this.showcase.load(this.fileList).then(files => {
      for (let path in files) {
        this.tabs.push(this.fileToTab(path, files[path]));
      }
    });
  }

  public toggleSource() {
    this.showSource = !this.showSource;
  }

  private fileToTab(path: string, content: string): ITab {
    let parts = path.split('/');
    let name = parts[parts.length - 1];

    parts = name.split('.');
    let ext = parts[parts.length - 1];

    let options = {
      mode: this.modes[ext] || ext,
      theme: 'material',
      lineNumbers: true,
      readOnly: true,
      autoRefresh: true
    };

    this.log.debug(name, options);

    return {
      title: name,
      options: options,
      content: content
    };
  }
}