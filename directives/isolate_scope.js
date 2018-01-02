(function() {

  var app = angular.module('directivesApp');

  app.directive('isolateScope', function() {
    return {
      scope: {},
      template: '<b>Name:</b> {{customer.name}} <br> <b>Street:</b> {{customer.street}}'
    };
  });

}());