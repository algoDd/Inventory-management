var app=angular.module('RMApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,$compileProvider)
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
			templateUrl:'/assets/html/Stock.html'
		})
		  .state('Sales',{
			name: 'Sales',
			url:'/Sales',
			templateUrl:'/assets/html/Sales.html'
		});
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:application\//);
	
});
app.controller('RMCrtl',function($scope,$http,$timeout){
	$scope.items = [];
	  $scope.newitem = '';
	  $scope.rawMat=[];
	  $scope.bill=[];
	  $scope.bitems=[];
	  $scope.stocks=[];
	  $scope.sitems=[];
	  $scope.value=false;
	  $scope.update=false;
	  var k=0;
	  var d= new Date()
	  $scope.date=d.toString();
	  $scope.rprice=0;
	  $scope.codeCheck="";
	  $scope.totalamt=0;
	  $scope.totalRM=0;
	  $scope.totalPricePerRm=0;
	  $scope.one=true;
	   $scope.two=false;
	   $scope.bupdate=false;
	   $scope.supdate=false;
	   $scope.err=false;
	   $scope.succ=false;
	   var a=-1;
	   if ($scope.items.length < 10) {
		      $scope.items.push(k++);
 	 }
	   if ($scope.bitems.length < 10) {
  		 $scope.bitems.push(k++);
  	 }
	   if ($scope.sitems.length < 10) {
  		 $scope.sitems.push(k++);
  	 }
	   //d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
	   /*.................divis js part...................*/
	   
	   $("#i_1").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px 0px rgb(150, 149, 148)");
		    $(this).parent().css("background", "rgb(51, 161, 196)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","linear-gradient(to top,rgb(51, 161, 196),rgb(184, 234, 249))");	
		});
		$("#i_2").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px 0px rgb(150, 149, 148)");
		    $(this).parent().css("background", "rgb(224, 2, 39)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","linear-gradient(to top,rgb(224, 2, 39),rgb(255, 102, 127))");
		});
		$("#i_3").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px 0px rgb(150, 149, 148)");
		    $(this).parent().css("background", "rgb(134, 206, 35)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","linear-gradient(to top,rgb(134, 206, 35),rgb(176, 255, 127))");
		});
		$("#i_4").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px 0px rgb(150, 149, 148)");
		    $(this).parent().css("background", "rgb(241, 238, 3)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","linear-gradient(to top,rgb(241, 238, 3),rgb(255, 253, 119))");
		});
		$('mytabs a').click(function (e){
			$(this).tab('show');
		});
		$(".container_1").on('click', function() {
			   $("#ovrly1").fadeIn();
			   $("#ovrly2,#ovrly3,#ovrly4").fadeOut();
			});
			$(".container_3").on('click', function() {
			   $("#ovrly3").fadeIn();
			   $("#ovrly1,#ovrly2,#ovrly4").fadeOut();
			});
			$(".container_2").on('click', function() {
			   $("#ovrly2").fadeIn();
			   $("#ovrly1,#ovrly3,#ovrly4").fadeOut();
			});
			$(".container_4").on('click', function() {
			   $("#ovrly4").fadeIn();
			   $("#ovrly1,#ovrly2,#ovrly3").fadeOut();
			});
		/*.................divis js part...................*/
//	  $scope.rawMat=[{
//			"name":
//			"price":
//			"quantity":
//	  }];
	//$scope.price=[];
	//$scope.quantity=[];
		
	   $scope.invoice=function()
	   {
		   var number=Math.floor((Math.random() * 999999) + 1000);
		   var n=Math.floor((Math.random() * 25) + 1);
		   var chr = String.fromCharCode(65 + n); 
		   $scope.inNo="#AR"+n+chr.toString()+number;
		  
	   }
	  
	  $scope.add = function(i){
		  $scope.value=true;
		  
		  $scope.vm = this;
		  if($scope.vm.$crtl!=undefined){
	       if($scope.vm.$crtl.name!=undefined&&$scope.vm.$crtl.price!=undefined&&$scope.vm.$crtl.quantity!=undefined){ 
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
		    	$scope.totalRM+=($scope.vm.$crtl.price); 
		    	
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
			      $scope.totalRM=$scope.totalRM+($scope.vm.$crtl.price); 
			      
	    	 }
	     }
	      
	    
	     }else{
	    	 
	    	 $scope.error="cannot add More Rows untill you fill out all columns";
	    	 $scope.err=true;
	    	 $timeout(function(){
				   $scope.err=false;
			   },3000);
	     }
		}else{
			$scope.error="cannot add More Rows untill you fill out all columns";
	    	 $scope.err=true;
	    	 $timeout(function(){
				   $scope.err=false;
			   },3000);
	    	 if($scope.sitems.length==0)
    		 {
    		 $scope.sitems.push(k++);
    		 }
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
		  if($scope.rawMat.length>1)
		 {
		  $http({
		   method:"POST",
		   url:"/api/rawMaterial",
		   data:$scope.rawMat
	   }).then(function (success){
		   console.log(success.data);
		   $scope.err=false;
		   $scope.succ=true;
		   $timeout(function(){
			   $scope.succ=false;
		   },3000);
		   $scope.success="Data Was Stored Successfully";
		   
	   },function (error){
		   $scope.err=true;
		   $timeout(function(){
			   $scope.err=false;
		   },3000);
		   $scope.succ=false;
		   $scope.error="Uhh!! Error Not Able To Save";
		  
	   });
		 }else{
			 $scope.err=true;
			 $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Empty Fields"; 
		 }
		  if( $scope.totalRM!=0)
		{
		  $http({
			   method:"POST",
			   url:"/api/rawTotal",
			   data:{"rmtotal":$scope.totalRM}
		   }).then(function (success){
			   console.log(success.data);
		   },function (error){
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Error Occured : Not Able To Save Data";
		   });
		}
	  }
	  $scope.del= function(i){
		 
		  if($scope.update==true){
		  $scope.totalRM =$scope.totalRM -($scope.rawMat[i].price);
		  $scope.rawMat.splice(i,1);
		  $scope.update=false;
		  $scope.items.splice($scope.rawMat.length,1);
	      }else{
	    	  $scope.rawMat.splice(i,1);
	    $scope.items.splice(i,1);
	    }
		  if( $scope.items.length==0)
			  {
			  	$scope.value=false;
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
				  $scope.error="cannot add more than 10";
			  }
	     }else{
	    	 if ($scope.bitems.length < 10) {
	    		 $scope.bitems.push(k++);
			      
			     
			    	  $scope.bill.push({

			    		  "catagory":$scope.vm.$crtl.selected_item,
			    		  "code":$scope.vm.$crtl.code,
			    	  	"quantity":$scope.vm.$crtl.quantity,
			      		"price":$scope.vm.$crtl.price
			       });
			      
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
	    
//	  $scope.done=function(){
//		  $scope.invoice();
//		 
//	    	  $scope.bill.push({
//
//	    		  "catagory":$scope.vm.$crtl.selected_item,
//	    		  "code":$scope.vm.$crtl.code,
//	    	  	"quantity":$scope.vm.$crtl.quantity,
//	      		"price":$scope.vm.$crtl.price
//	       });
//	     
//	      if( $scope.rprice!=0){
//	    	  $scope.totalamt+=($scope.vm.$crtl.quantity* $scope.rprice);
//	    	  }
// 
//	  }
//	  
	 
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
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Error Occured : Code Doesn't Exist";
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

    
	      $scope.exportAsPdf=function(){
		  html2canvas(document.getElementById("pdf_content"), {
			onrendered: function (canvas) {	
				
				var data = canvas.toDataURL("image/jpeg",1.0);
				var ctx=data;
				ctx.webkitImageSmoothingEnabled = true;
	            ctx.mozImageSmoothingEnabled = true;
	            ctx.imageSmoothingEnabled = true;
	            ctx.imageSmoothingQuality = "high";
	   
				var docDefinition = {
						content: [{
							image: data,
						    width:500,
						  				      
				}]
				};
				pdfMake.createPdf(docDefinition);
				$scope.base_64= pdfMake.createPdf(docDefinition).getBase64(function(encodedString) {
				    $scope.base64data = "data:application/pdf;base64,"+encodedString;
				    $scope.save();
				});
			}  
		  });
		 
	  }
	  $scope.save=function(){
		  if( $scope.base64data!=null && $scope.totalamt!=0)
		  $http({
			   method:"POST",
			   url:"/api/billinvoice",
			   data:{"pdf":$scope.base64data,"invoice_no": $scope.inNo,"total_amt":$scope.totalamt}
		   }).then(function (success){
			   console.log('done');

			   $scope.succ=true;
			   $timeout(function(){
				   $scope.succ=false;
			   },3000);

			   $scope.success="Pdf Generated Successfully"
		   },function (error){
			   console.log('Not done');
			   $scope.err=true;

			   $timeout(function(){
				   $scope.err=false;
			   },3000);

			   $scope.error="Uhh!! Error Occured : Please Try Again Later";
		   });
	   }
	 /* 
	  $scope.final_amt=0;
	  $scope.f_total=function(){
		  $scope.final_amt=$scope.totalamt+$scope.ship_chrg+$scope.tax_+$scope.o_chrg; 
	  }
	  
	  $scope.exportAsPdf=function(){
		  html2canvas(document.getElementById("pdf_content"), {
			onrendered: function (canvas) {	
				var data = new Image();
				var ctx =data;
				ctx.webkitImageSmoothingEnabled = true;
	            ctx.mozImageSmoothingEnabled = true;
	            ctx.imageSmoothingEnabled = true;
	            ctx.imageSmoothingQuality = "high";

			    data = canvas.toDataURL("image/jpeg",1.0);
			    console.log(data);
				var doc = new jsPDF("p","mm","a4");
			    var width= doc.internal.pageSize.width;
				var height= doc.internal.pageSize.height;
				doc.internal.scaleFactor = 3;
				doc.addImage(data,'JPEG',25,15,(width*.72),(height*.72),undefined,'FAST');
				doc.save('bill.pdf');
				
			}  
		  });
	  }*/

	  /*..........................Sales...................................*/
	  $scope.sadd = function(i){
		  $scope.value=true;
		 	 
		  $scope.vm = this;
	     if($scope.vm.$crtl!=undefined){ 
	    	 if($scope.vm.$crtl.name!=undefined&&$scope.vm.$crtl.price!=undefined&&$scope.vm.$crtl.quantity!=undefined){
	      if($scope.stocks.length!=(i))
		  {   
	    	  if ($scope.sitems.length < 10) {
	    		  $scope.sitems.push(k++);
		      $scope.vm = this;
		     
		    	  $scope.stocks.splice(i,0,{

		    		  "catagory":$scope.vm.$crtl.selected_item,
		    		  "code":$scope.vm.$crtl.code,
		    	  	
		      		"quantity":$scope.vm.$crtl.quantity
		       });
		    	  
		    	  $scope.supdate=true;
		    $scope.sdel((i+1));
		    
		  
	    	}else{
				  $scope.error="cannot add more then 10";
			  }
	     }else{
	    	 if ($scope.sitems.length < 10) {
	    		 $scope.sitems.push(k++);
			      
			     
			    	  $scope.stocks.push({

			    		  "catagory":$scope.vm.$crtl.selected_item,
			    		  "code":$scope.vm.$crtl.code,
			    	  	"quantity":$scope.vm.$crtl.quantity
			      		
			       });
			      
			     
	    	 }
	     }
	      
	    
	     }else{
	    	 if ($scope.sitems.length < 10) {
	    		 $scope.sitems.push(k++);
	    	 }
	    	 //$scope.error="cannot add More Rows untill you fill out all columns";
	     }
	    }else{
	    	$scope.error="cannot add More Rows untill you fill out all columns";
	    	 $scope.err=true;
	    	 $timeout(function(){
				   $scope.err=false;
			   },3000);
	    	 if($scope.sitems.length==0)
	    		 {
	    		 $scope.sitems.push(k++);
	    		 }
	    }
	  }
	  $scope.sdel= function(i){
		  if($scope.supdate==true){
		  
		  $scope.stocks.splice(i,1);
		  $scope.supdate=false;
		  $scope.sitems.splice($scope.stocks.length,1);
	      }else{
	    	  $scope.stocks.splice(i,1);
	    $scope.sitems.splice(i,1);
	    }
		  console.log(i);
	  }
	  $scope.Ssubmit = function(){
		  if($scope.stocks.length>=1)
		 {
		  $http({
		   method:"POST",
		   url:"/api/stocks",
		   data:$scope.stocks
	   }).then(function (success){
		   console.log(success.data);
		   $scope.err=false;
		   $scope.succ=true;
		   $timeout(function(){
			   $scope.succ=false;
		   },3000);
		   $scope.success="Data Was Stored Successfully";
		   
	   },function (error){
		   $scope.err=true;
		   $timeout(function(){
			   $scope.err=false;
		   },3000);
		   $scope.succ=false;
		   $scope.error="Uhh!! Error Not Able To Save";
		  
	   });
		 }else{
			 $scope.err=true;
			 $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Empty Fields"; 
		 }
		  
	  }
	  $scope.checkcode = function(code){
		  $scope.vm = this; 
		  $scope.json={"code":$scope.vm.$crtl.code};
		  
		  $http({
			   method:"POST",
			   url:"/api/bill",
			   data:$scope.json
		   }).then(function (success){
			   
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   console.log(error.data);
			   $scope.selected_item="";
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Error Occured : Code Doesn't Exist";
		   });
		  
	  }


	  
	 

});




