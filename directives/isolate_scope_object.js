(function() {

  var app = angular.module('directivesApp');

  app.directive('isolateScopeWithObject', function() {
    return {
      scope: {
        data: '='
      }, 
      template: '<b>Name:</b> {{data.name}} <b>Street:</b> {{data.street}}' +
      '<br><button ng-click="data.name=\'Fred\'">' +
      'Change</button>'
    };
  });

}());