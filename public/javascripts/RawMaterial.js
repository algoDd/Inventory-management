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
		}).state('Stock',{
			name: 'Stock',
			url:'/Stock',
			templateUrl:'/assets/html/stocks.html'
		});
});
app.controller('RMCrtl',function($scope,$http){
	$scope.items = [];
	  $scope.newitem = '';
	  $scope.rawMat=[];
	  $scope.bill=[];
	  $scope.bitems=[];
	  $scope.value=false;
	  $scope.update=false;
	  var k=0;
	  $scope.rprice=0;
	  $scope.codeCheck="";
	  $scope.totalamt=0;
	  $scope.totalRM=0;
	  $scope.one=true;
	   $scope.two=false;
	   $scope.bupdate=false;
	   /*.................divis js part...................*/
	   $('#i_1,#i_2,#i_3,#i_4').click(function() {
		   // make a jQ collection of the DOM element from the event
		   var $elem = $(this);
		   // store the background-color
		   var oldBG = $elem.css('background');
		   // change the background color to what you want
		   $elem.css('background', 'linear-gradient(rgb(181, 245, 255),rgb(22, 249, 121),rgb(1, 134, 153))');
		   // after 1 second, change it back
		   setTimeout(function() {
		     $elem.css('background', oldBG);
		   }, 1000);
		 }); 
	  
//	  $scope.rawMat=[{
//			"name":
//			"price":
//			"quantity":
//	  }];
	//$scope.price=[];
	//$scope.quantity=[];
	   $scope.invoice=function()
	   {
		   var number=Math.floor((Math.random() * 999999) + 10000);
		   var n=Math.floor((Math.random() * 25) + 1);
		   var chr = String.fromCharCode(65 + n); 
		   $scope.inNo="#AR"+n+chr.toString()+number;
	   }
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
		    	$scope.totalRM+=($scope.vm.$crtl.price*$scope.vm.$crtl.quantity);  
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
			      $scope.totalRM=$scope.totalRM+($scope.vm.$crtl.price*$scope.vm.$crtl.quantity);  
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
		  $scope.totalRM =$scope.totalRM -($scope.rawMat[i].price*$scope.rawMat[i].quantity);
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
		  $scope.value=true;
			 
		  $scope.vm = this;
	     if($scope.vm.$crtl!=undefined){ 
	      if($scope.bill.length!=(i))
		  {   
	    	  if ($scope.bitems.length < 10) {
	    		  $scope.bitems.push(k++);
		      $scope.vm = this;
		      if($scope.bitems.length!=1){
		    	  $scope.bill.splice(i,0,{
		    		  "catagory":$scope.vm.$crtl.selected_item,
		    	  "code":$scope.vm.$crtl.code,
		    	  	"price":$scope.vm.$crtl.price,
		      		"quantity":$scope.vm.$crtl.quantity
		       });
		    	  if( $scope.rprice!=0){
		    	  $scope.totalamt+=($scope.vm.$crtl.quantity* $scope.rprice);
		    	  }
		    	  $scope.bupdate=true;
		    $scope.bdel((i+1));
		    
		  }else{
			  $scope.error="cannot add more then 10";
		  }
	    	}
	     }else{
	    	 if ($scope.bitems.length < 10) {
	    		 $scope.bitems.push(k++);
			      
			      if($scope.bitems.length!=1){
			    	  $scope.bill.push({
			    		  "catagory":$scope.vm.$crtl.selected_item,
			    	  "code":$scope.vm.$crtl.code,
			    	  	"quantity":$scope.vm.$crtl.quantity,
			      		"price":$scope.vm.$crtl.price
			       });
			      }
			      if( $scope.rprice!=0){
			    	  $scope.totalamt+=($scope.vm.$crtl.quantity* $scope.rprice);
			    	  }
	    	 }
	     }
	      
	    
	     }else{
	    	 if ($scope.bitems.length < 10) {
	    		 $scope.bitems.push(k++);
	    	 }
	    	 //$scope.error="cannot add More Rows untill you fill out all columns";
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
			   
		   },function (error){

		   });
		  }else{
			  $scope.vm.$crtl.price=$scope.vm.$crtl.quantity * $scope.rprice ;
			  
		  }
	  }
	  
	  $scope.bdel= function(i){
		  if($scope.bupdate==true){
		  $scope.totalamt =$scope.totalamt -($scope.bill[i].price);
		  $scope.bill.splice(i,1);
		  $scope.bupdate=false;
		  $scope.bitems.splice($scope.bill.length,1);
	      }else{
	    	  $scope.bill.splice(i,1);
	    $scope.bitems.splice(i,1);
	    }
		  console.log(i);
	  }
});




