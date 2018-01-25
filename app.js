var router=angular.module('myApp',['ui.router']);
router.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise("/home")
$stateProvider
.state('home',{
url:'/home',
templateUrl:'home.html',
//template:'home'
})
.state('about',{
url:'/about',
template:'about'
})
});
