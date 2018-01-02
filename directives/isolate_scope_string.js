(function() {

  var app = angular.module('directivesApp');

  app.directive('isolateScopeWithString', function() {
    return {
      scope: {
        name: '@',
        street: '@'
    }, 
      template: '<b>Name:</b> {{name}} <br> <b>Street:</b> {{street}}'
    };
  });

}());