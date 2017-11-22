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
	  $scope.bills=[];
	  $scope.billsCompleted=[];
	  $scope.stocks=[];
	  var k=0;
	  var date= new Date();
	  var d=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate());
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
	   $scope.war=false;
	   $scope.BillTotal=0;
	   $scope.RawTotal=0;
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
	   
		$('mytabs a').click(function (e){
			$(this).tab('show');
		});
		$(".links1").on('click', function() {
			   $("#r1,#activepg").fadeIn();
			   $("#b1,#st1,#s1,#s_srch,#activepg2,#activepg3,#activepg4").hide();
			});
			$(".links2").on('click', function() {
			   $("#b1,#activepg2").fadeIn();
			   $("#r1,#st1,#s1,#s_srch,#activepg,#activepg3,#activepg4").hide();
			});
			$(".links3").on('click', function() {
			   $("#st1,#activepg3").fadeIn();
			   $("#r1,#b1,#s1,#activepg2,#s_srch,#activepg,#activepg4").hide();
			});
			$(".links4").on('click', function() {
			   $("#s1,#s_srch,#activepg4").fadeIn();
			   $("#r1,#b1,#st1,#activepg2,#activepg3,#activepg").hide();
			});
		/*.................divis js part...................*/
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
		  if($scope.rawMat.length>=1)
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
		   $scope.success="Data Was Stored Successfully!! REDIRECTING TO THE MAIN PAGE";
		   
	   },function (error){
		   $scope.err=true;
		   $timeout(function(){
			   $scope.err=false;
		   },3000);
		   $scope.succ=false;
		   $scope.error="Uhh!! Error Not Able To Save";
		  
	   });
		  if( $scope.totalRM!=0)
			{
			  $http({
				   method:"POST",
				   url:"/api/rawTotal",
				   data:{"rmtotal":$scope.totalRM}
			   }).then(function (success){
				   console.log(success.data);
				   $timeout(function(){
					   window.location="/";
				   },2000);
				   
			   },function (error){
				   $scope.err=true;
				   $timeout(function(){
					   $scope.err=false;
				   },3000);
				   $scope.succ=false;
				   $scope.error="Uhh!! Error Occured : Not Able To Save Data";
			   });
			}
		  
		 }else{
			 $scope.err=true;
			 $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Uhh!! Empty Fields"; 
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
	  $scope.invoice=function()
	   {
		   var number=Math.floor((Math.random() * 999999) + 1000);
		   var n=Math.floor((Math.random() * 25) + 1);
		   var chr = String.fromCharCode(65 + n); 
		   $scope.inNo="#AR"+n+chr.toString()+number;
		   
	   }
	  $scope.stockcheck=function(code,quan)
	  {
		  $http({
			   method:"POST",
			   url:"/api/check",
			   data:{"code":code,"quantity":quan}
		   }).then(function (success){			  
			   $scope.StockError=false;
			   $scope.err=false;
			   if(success.data=="done"){
				   $scope.succ=false;
				   
				   
			   }else
				   {
				   $scope.StockError=true;
				   $timeout(function(){
					   $scope.war=false;
				   },6000);
				    $scope.war=true;
				    $scope.warning=success.data;
				   }
			   
		   },function (error){
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },10000);
			   $scope.succ=false;
			   $scope.error=error.data;
			   $scope.StockError=true;
		   });
	  }
	  $scope.addb = function(i){
		  $scope.value=true;
		 	 
		  $scope.vm = this;
	     if($scope.vm.$crtl!=undefined){ 
	    	 $scope.stockcheck($scope.vm.$crtl.code,$scope.vm.$crtl.quantity); 
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
	    	 $scope.error="cannot add More Rows until you fill out all columns";
	    	 $scope.err=true;
	    	 $timeout(function(){
				   $scope.err=false;
			   },3000);
	    	 if($scope.sitems.length==0)
    		 {
    		 $scope.sitems.push(k++);
    		 }
	    	 //$scope.error="cannot add More Rows until you fill out all columns";
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
			   $scope.rprice=parseInt(success.data.price);
			   $scope.vm.$crtl.price=$scope.vm.$crtl.quantity * $scope.rprice ;
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Code Doesn't Exist";
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


    
	   

	  $scope.save=function(){
		  
		  if( $scope.base64data!=null && $scope.totalamt!=0)
		  $http({
			   method:"POST",
			   url:"/api/billinvoice",
			   data:{"pdf":$scope.base64data,"invoice_no": $scope.inNo,"total_amt":$scope.totalamt,"date":$scope.date,"status":"P"}//,"name":$scope.pdfname
		   }).then(function (success){
			   console.log('done');

			   $scope.succ=true;
			   $timeout(function(){
				   $scope.succ=false;
			   },3000);

			   $scope.success="Pdf Generated Successfully"
				   $timeout(function(){
					   window.location="/";
				   },2000);
		   },function (error){
			   console.log('Not done');
			   $scope.err=true;

			   $timeout(function(){
				   $scope.err=false;
			   },3000);

			   $scope.error="Please Try Again Later";
		   });
	   }
	
	  
	  $scope.exportAsPdf=function(){
//		  
		  var draw = kendo.drawing;

	        draw.drawDOM($("#pdf_content"), {
	            
	            paperSize: "A4",
	            margin: "0.25cm",
	            scale: 0.7
	        })
	        .then(function(root) {
	            return draw.exportPDF(root);
	        })
	        .done(function(data) {
	            kendo.saveAs({
	                dataURI: data,
	                fileName: "bill.pdf"
	            });
	        });
		  
	  }
	  

	  /*..........................Stock...................................*/
	  $scope.sadd = function(i){
		  $scope.value=true;
		 	 
		  $scope.vm = this;
	     if($scope.vm.$crtl!=undefined){ 
	    	 if($scope.vm.$crtl.code!=undefined&&$scope.vm.$crtl.selected_item!=undefined&&$scope.vm.$crtl.quantity!=undefined)
	    	 {
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
	    	 $scope.error="cannot add More Rows untill you fill out all columns";
	    	 $scope.err=true;
	    	 $timeout(function(){
				   $scope.err=false;
			   },3000);
	    	 if($scope.sitems.length==0)
	    		 {
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
		   $scope.error="Not Able To Save";
		  
	   });
		 }else{
			 $scope.err=true;
			 $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			   $scope.error="Empty Fields"; 
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
			   $scope.error="Code Doesn't Exist";
		   });
		  
	  }
	 
	  $scope.getStock=function()
	  {
		  
		  $http({
			  method:"GET",
			  url:"/api/getStocks"
		  }).then(function(success){
			  console.log(success.data);
			  $scope.stocks=success.data;
		  },function(error){
			  console.log(error.data);
			  $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.succ=false;
			  $scope.error=error.data;
		  });
	  }

	  /*..........................sales...................................*/
	  
	 
	  $scope.getpdf=function(status){
		  var a=status;
		  $http({
			   method:"GET",
			   url:"/api/pdfdetails"+"/"+a
			   
		   }).then(function (success){
			   console.log(success.data);
			   if(status=="P")
				   {
				   $scope.bills=success.data;
				   }else{
					   $scope.billsCompleted=success.data;
				   }
			   
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   console.log(error.data);
//			   $scope.selected_item="";
//			   $scope.err=true;
//			   $timeout(function(){
//				   $scope.err=false;
//			   },3000);
//			   $scope.succ=false;
//			   $scope.error="Code Doesn't Exist";
		   });
	  }
	 $scope.prev=function(i)
	 {
		 
		 //todo api to update status and calc sales
		 $http({
			   method:"POST",
			   url:"/api/update",
			   data:{"inVoice":$scope.bills[i].inVoice}
		   }).then(function (success){
			   console.log(success.data);
			   $scope.getpdf("P");
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   console.log(error.data);
		   });
		 
		 
	 }
	 $scope.getMonthSales=function(){
		
		 var date1=document.getElementById('date1').value;
		 var date2=document.getElementById('date2').value;
		 $http({
			   method:"POST",
			   url:"/api/getSales",
			   data:{"date1":date1,"date2":date2}
		   }).then(function (success){
			   console.log(success.data);
			   $scope.BillTotal=success.data.BillTotal;
			   $scope.RawTotal=success.data.RawTotal;
			   $scope.salesBwDates=$scope.BillTotal+$scope.RawTotal;
			   $scope.err=false;
			   $scope.succ=false;
		   },function (error){
			   console.log(error.data);
			   $scope.err=true;
			   $timeout(function(){
				   $scope.err=false;
			   },3000);
			   $scope.error="Something Wrong Please Check The Dates"
		   });
	 }
	 

});




