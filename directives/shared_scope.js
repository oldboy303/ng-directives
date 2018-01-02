(function() {

  var app = angular.module('directivesApp');

  app.directive('sharedScope', function() {
    return {
      template: '<b>Name:</b> {{customer.name}} <br> <b>Street:</b> {{customer.street}}'
    }
  });

}());