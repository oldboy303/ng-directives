(function() {

  var app = angular.module('directivesApp');

  app.directive('isolateScopeWithEvent', function() {
    return {
      scope: {
        data: '=',
        action: '&'
      },
      template: 'Name: {{data.name}} Street: {{data.street}} ' +
                '<button ng-click="action()">Change Data</button>'
    };
  });

}());