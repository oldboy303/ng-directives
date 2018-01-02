(function() {

  var app = angular.module('directivesApp');

  app.directive('isolateScopeWithObject2', function() {
    return {
      scope: {
        data: '='
      },
      template: '<li>Name: {{data.name}} , Street: {{data.street}}</li>'
    };
  });

}());