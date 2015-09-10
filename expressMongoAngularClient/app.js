var app = angular.module('swordsApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/swords.html',
    controller: 'SwordsController'
  })
  // .when('/:id', {
  //   templateUrl:'/templates/show.html',
  //   controller: 'SwordsController',
  // })
  .otherwise({redirectTo:'/'});
})
