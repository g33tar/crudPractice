app.controller('SwordsController', ['$scope', '$http', function($scope, $http){

$http.get('http://localhost:8080/api/swords/').then(function(response){
  $scope.swords = response.data

}, function(){
  console.log('HTTP GET ERROR');
});

$scope.addSword = function(sword){
  var sword = {
    swordName: $scope.swordName
  }

  $http.post('http://localhost:8080/api/swords/', sword).then(function(response){
  }, function(){
    console.log('HTTP POST ERROR');
  })
}

$scope.showSword = function(sword){
  $scope.s
}

$scope.deleteSword = function(sword){
  
}


}])
