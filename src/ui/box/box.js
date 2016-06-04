const app = require('app');
require('./box.scss');

app.directive('uiBox', () => ({
  restrict:   'E',
  replace:    true,
  transclude: true,
  template:   require('./box.html'),
  scope:      {
    header: '@',
    title:  '@',
  },
}));
