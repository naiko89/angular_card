import { WorksLinks } from '../interface/worksLinks';

export const LINKS: WorksLinks[] = [
  { id: 1, name: 'MappaTest', link: 'http://www.tempastro.com/map/MapTestCase/', descr: 'Uno studio delle mappe di Google e OpenStreetmap, e di studio di tracciati gpx',
    component: {frm: ['/assets/icons/jquery.png', '/assets/icons/codeigniter.png', '/assets/icons/bootstrap.png'],
                db: [],
                lang: ['/assets/icons/javascript.png', '/assets/icons/php.png'] }
    },
  { id: 2, name: 'TimbraturaTest', link: 'http://www.tempastro.com/timbr/public/', descr: 'Un semplice software di timbratura con login e riempimento di missioni da calendario missioni',
    component: {frm: ['/assets/icons/jquery.png', '/assets/icons/codeigniter.png', '/assets/icons/bootstrap.png'],
                db: ['/assets/icons/mariadb.png'],
                lang: ['/assets/icons/javascript.png', '/assets/icons/php.png'] }
  },
  { id: 3, name: 'Caret', link: 'www.tre', descr: 'Una semplice web-app per ordini con carrello per interfacciare il client al server di un magazzino',
    component: {frm: [ '/assets/icons/angular.png', '/assets/icons/bootstrap.png' ],
                db: [],
                lang: ['/assets/icons/typescript.png'] }
  }
];
// { id: 1, name: 'Angular', link: '/assets/icons/angular.png', descr: '', navigLink: 'https://angular.io/'},
//   { id: 2, name: 'Bootstrap', link: '/assets/icons/bootstrap.png', descr: '', navigLink: 'https://ng-bootstrap.github.io/#/home'},
//   { id: 3, name: 'Codeigniter', link: '/assets/icons/codeigniter.png', descr: '', navigLink: 'http://codeigniter.com/home'},
//   { id: 4, name: 'Css', link: '/assets/icons/css.png', descr: '', navigLink: 'https://en.wikipedia.org/wiki/CSS'},
//   { id: 5, name: 'Javascript', link: '/assets/icons/javascript.png', descr: '', navigLink: 'https://www.javascript.com/'},
//   { id: 6, name: 'Jquery', link: '/assets/icons/jquery.png', descr: '', navigLink: 'https://jquery.com/'},
//   { id: 7, name: 'Node', link: '/assets/icons/node.png', descr: '', navigLink: 'https://nodejs.org/docs/latest-v13.x/api/'},
//   { id: 8, name: 'Php', link: '/assets/icons/php.png', descr: '', navigLink: 'https://www.php.net/'},
//   { id: 9, name: 'Typescript', link: '/assets/icons/typescript.png', descr: '', navigLink: 'https://www.typescriptlang.org/'},
//   { id: 10, name: 'MariaDB', link: '/assets/icons/mariadb.png', descr: '', navigLink: 'https://mariadb.org/'}
