//console.log('Archivo cargado');


angular.module( "myApp", 
                            [ 'ngRoute' ] ).
config([
    '$routeProvider',
    function($routeProvider)
    {
      
        $routeProvider.
        when('/users', {
          templateUrl: 'templates/users.html'
        }).
        when('/repos', {
          templateUrl: 'templates/repos.html'          
        }).
        otherwise({
          redirectTo: '/users'
        })
        ;
    }
  ])
;
