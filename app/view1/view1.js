'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.filter('greet',function(){
   return function(w) {
     return 'Hello, ' + w + ' !';
   };
})

.filter('length',function(){
   return function(w) {
     return w.length;
   };
})

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.name='World';
}]);
