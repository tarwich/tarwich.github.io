const app = require('app');
require('./skill.scss');

app.directive('resumeSkill', () => ({
  restrict: 'E',
  replace:  true,
  template: require('./skill.html'),
  scope:    {
    model: '=ngModel',
    name:  '@',
    level: '@',
    time:  '@',
    image: '@',
  },
}))
;
