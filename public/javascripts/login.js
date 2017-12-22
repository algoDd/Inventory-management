/*Script for Form Values validation/correction
  */







/*Script for the loginapp*/

var app=angular.module('loginapp',['ngRoute']);
app.controller('loginctrl',function($scope,$http)
{ $scope.login=function(){
	var unm=escape($scope.u_name);
	if(document.getElementById("rememberMe").checked==true)
	{  var LoginData={'uname':unm,'passwd':$scope.u_pass,'remember':true};
		
	}
	else
	{  var LoginData={'uname':unm,'passwd':$scope.u_pass,'remember':false};
	
	}		
	if($scope.u_name!=null && $scope.u_pass!=null)	
	{	$http({
	    method:"POST",
	    url:"/api/login",
	    data :LoginData}
	).then(function onSuccess(response){ alert("Hello "+response.data.User);
	window.location.href=response.data.RedirectTo;
	  
	},
	function onError(response){ alert(response.data);});

	}	
	}
	$scope.forgot=function(){
		var unm=escape($scope.u_name);
		var LoginData={'uname':unm};
		$http({
		    method:"POST",
		    url:"/api/forgot",
		    data :LoginData}
		).then(function onSuccess(response){ alert(response.data);
	     location.reload(true);},function onError(response){alert(response.data);});
	}
	
	
	
	

});