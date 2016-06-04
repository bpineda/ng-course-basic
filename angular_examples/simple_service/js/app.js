//console.log('Archivo cargado');


var myApp = angular.module("myApp", ['ngRoute'] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/', {
          templateUrl: 'templates/index_view.html',
          controller: 'IndexController'
        }).
        when('/controllers', {
          templateUrl: 'templates/controllers_view.html',
          controller: 'ControllerController'
        }).
        when('/views', {
          templateUrl: 'templates/views_view.html',
          controller: 'ViewsController'
        }).
        otherwise({
          redirectTo: '/'
        })
        ;
    }
  ]).
controller(
    'ViewsController',
    function($scope)
    {
      $scope.name = 'Gerardo';
      console.log('Loading Views Controller');
      $scope.technologies = [
      {name: 'PHP', id:1},
      {name: 'ASP', id:2},
      {name: 'Ruby'},
      {name: 'Java'},
      {name: 'VB'},
      {name: 'Python'},
      {name: 'C#', id:3}
      ];
      $scope.showAlert = function(){ alert(123); };
    }
  ).
controller(
    'ControllerController',
    function($scope)
    {
      $scope.name = 'José';
      console.log('Loading Controller Controller');
      $scope.articles = [{name: 'Article1'},{name:'Article2'},{name:'Article3'}];
      $scope.greet = function()
      {
        alert(123);
      }
    }
  ).
controller(
    'IndexController',
      function($scope, User)
    {
      $scope.name = "Fabian";

      console.log('Loading Home Controller');
    }
    
  )
;

