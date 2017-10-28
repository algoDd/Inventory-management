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
		}).state('Billing',{
			name: 'Billing',
			url:'/Billing',
			templateUrl:'/assets/html/Billing.html'
		});
});
app.controller('RMCrtl',function($scope,$http){
	$scope.items = [];
	  $scope.newitem = '';
	  $scope.rawMat=[];
	  $scope.value=false;
	  $scope.update=false;
	  var k=0;
	  $scope.codeCheck="";
	  $scope.totalamt=0;
	  $scope.one=true;
	   $scope.two=false;
	  
//	  $scope.rawMat=[{
//			"name":
//			"price":
//			"quantity":
//	  }];
	//$scope.price=[];
	//$scope.quantity=[];
	  $scope.add = function(i){
		  $scope.value=true;
		 
		  $scope.vm = this;
	     if($scope.vm.$crtl!=undefined){ 
	      if($scope.rawMat.length!=(i))
		  {   
	    	  if ($scope.items.length < 10) {
		      $scope.items.push(k++);
		      $scope.vm = this;
		      if($scope.items.length!=1){
		    	  $scope.rawMat.splice(i,0,{
		    	  "name":$scope.vm.$crtl.name,
		    	  	"price":$scope.vm.$crtl.price,
		      		"quantity":$scope.vm.$crtl.quantity
		       });
	    	  $scope.update=true;
		    $scope.del((i+1));
		    
		  }else{
			  $scope.error="cannot add more then 10";
		  }
	    	}
	     }else{
	    	 if ($scope.items.length < 10) {
			      $scope.items.push(k++);
			      
			      if($scope.items.length!=1){
			    	  $scope.rawMat.push({
			    	  "name":$scope.vm.$crtl.name,
			    	  	"price":$scope.vm.$crtl.price,
			      		"quantity":$scope.vm.$crtl.quantity
			       });
			      }
	    	 }
	     }
	      
	    
	     }else{
	    	 if ($scope.items.length < 10) {
			      $scope.items.push(k++);
	    	 }
	    	 //$scope.error="cannot add More Rows untill you fill out all columns";
	     } 
	    
	  }
	  $scope.tab=function(t)
	  {
		  if(t==1)
			  {
			   $scope.one=true;
			   $scope.two=false;
			   
			  }else
				  {
				  $scope.one=false;
				   $scope.two=true;
				   $scope.value=false;
				  }
	  }
	  $scope.submit = function(){
		  $http({
		   method:"POST",
		   url:"/api/rawMaterial",
		   data:$scope.rawMat
	   }).then(function (success){
		   console.log(success.data);
	   },function (error){

	   });
	  }
	  $scope.del= function(i){
		  if($scope.update==true){
		  $scope.rawMat.splice(i,1);
		  $scope.update=false;
		  $scope.items.splice($scope.rawMat.length,1);
	      }else{
	    	  $scope.rawMat.splice(i,1);
	    $scope.items.splice(i,1);
	    }
		  console.log(i);
	  }
	  /*..........................Billing...................................*/
	  $scope.addb = function(i){
		 
	 
	  if ($scope.items.length < 10) {
	      $scope.items.push(k++);
	  
	  }
	 }
	  $scope.calcPrice = function(code){
		  $scope.vm = this; 
		  $scope.json={"code":$scope.vm.$crtl.code};
		  if(code!=$scope.codeCheck){
			  $scope.codeCheck=code;
		  $http({
			   method:"POST",
			   url:"/api/bill",
			   data:$scope.json
		   }).then(function (success){
			   $scope.rprice=parseInt(success.data);
			   $scope.vm.$crtl.price=$scope.vm.$crtl.quantity * $scope.rprice ;
			   $scope.totalamt+= $scope.price;
		   },function (error){

		   });
		  }else{
			  $scope.vm.$crtl.price=$scope.vm.$crtl.quantity * $scope.rprice ;
			  $scope.totalamt+= $scope.price;
		  }
	  }
});




