var app=angular.module('RMApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider)
		{
	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/assests/html/upload.html','/');
	$stateProvider
	.state('home',{
		name: 'home',
		url:'/index',
		templateUrl:'/assets/html/home.html'
	}).state('RawMaterial',{
			name: 'RawMaterial',
			url:'/RawMaterial',
			templateUrl:'/assets/html/RawMaterial.html'
		});
});
app.controller('RMCrtl',function($scope,$http){
	$scope.items = [];
	  $scope.newitem = '';
	 
	  $scope.add = function(){
	    if ($scope.items.length < 10) {
	      $scope.items.push($scope.items.length);
	    }
	  }

	  $scope.del = function(i){
	      console.log(i);
	    $scope.items.splice(i,1);
	  }
});