(function() {

  var app = angular.module('directivesApp', []);

  var injectParams = ['$scope'];

  var customersController = function($scope) {
    var counter = 0;

    $scope.customer = {
      name: 'John',
      street: '123 Main St'
    };

    $scope.customers = [
      {
        name: 'David',
        street: '111 Lincoln St'
      },
      {
        name: 'Mary',
        street: '222 Broadway'
      },
      {
        name: 'Jim',
        street: '333 Cedar Way'
      },
      {
        name: 'Tina',
        street: '444 5th Ave'
      },
      {
        name: 'Bill',
        street: '555 Blosom Lane'
      }
    ];

    $scope.changeData = function() {
      $scope.customer = {
        name: 'Jimbo',
        street: '777 Lucky Lane'
      };
    };
  
  };

  customersController.$inject = injectParams;

  app.controller('customersController', customersController);

}());