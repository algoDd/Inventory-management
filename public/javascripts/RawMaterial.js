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
			templateUrl:'/assets/html/stocks.html'
		});
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:application\//);
	
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
	  var d= new Date()
	  $scope.date=d.toString();
	  $scope.rprice=0;
	  $scope.codeCheck="";
	  $scope.totalamt=0;
	  $scope.totalRM=0;
	  $scope.one=true;
	   $scope.two=false;
	   $scope.bupdate=false;
	   $scope.err=false;
	   $scope.succ=false;
	   var a=-1;
	   if ($scope.items.length < 10) {
		      $scope.items.push(k++);
 	 }
	   if ($scope.bitems.length < 10) {
  		 $scope.bitems.push(k++);
  	 }
	   //d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
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
	   $("#i_1").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px -2px rgba(0,0,0,0.3)");
		    $(this).parent().css("background", "rgba(255, 150, 71,0.7)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","#ff9647");
		});
		$("#i_2").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px -2px rgba(0,0,0,0.3)");
		    $(this).parent().css("background", "rgba(186, 248, 255,0.7)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","#baf8ff");
		});
		$("#i_3").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px -2px rgba(0,0,0,0.3)");
		    $(this).parent().css("background", "rgba(255, 132, 187,0.7)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","##ff84bb");
		});
		$("#i_4").children().focus(function() {
		    $(this).parent().css("box-shadow", "0px 3px 25px -2px rgba(0,0,0,0.3)");
		    $(this).parent().css("background", "rgba(94, 255, 158,0.7)");
		}).blur(function() {
		    $(this).parent().css("box-shadow","none");
		    $(this).parent().css("background","#5eff9e");
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
//		 if(i==-1)
//			 {
//			  if(a==-1){
//			      $scope.items.push(k++);
//	    	      
//	    	      }
//			  a++;
//    	      return;
//			 }
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
		   $scope.err=false;
		   $scope.succ=true;
		   $scope.success="Data Was Stored Successfully";
		   
	   },function (error){
		   $scope.err=true;
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
		   },function (error){
			   $scope.err=true;
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
				  $scope.error="cannot add more then 10";
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
			   
		   },function (error){
			   $scope.err=true;
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
	/*  $scope.exportAsPdf=function(){
	  var doc = new jsPDF();
	  var specialElementHandlers = {
	      '#editor': function (element, renderer) {
	          return true;
	      }
	  };
	 
	      doc.fromHTML($('#pdf_content').html(), 15, 15, {
	          'width': 170,
	              'elementHandlers': specialElementHandlers
	      });
	      doc.save('sample-file.pdf');
	 
	}*/

	  $scope.exportAsPdf=function(){
		  html2canvas(document.getElementById("pdf_content"), {
			onrendered: function (canvas) {	
				
				var data = canvas.toDataURL();
				
				var docDefinition = {
						content: [{
							image: data,
						    width: 500,
					      
				}]
				};
				pdfMake.createPdf(docDefinition).download("bill.pdf");
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
			   $scope.success="Pdf Generated Successfully"
		   },function (error){
			   console.log('Not done');
			   $scope.error="Uhh!! Error Occured : Please Try Again Later";
		   });
	   }
	  
	/*  $scope.exportAsPdf=function(){
		  html2canvas(document.getElementById("pdf_content"), {
			onrendered: function (canvas) {	
				var data = new Image();
			    data = canvas.toDataURL("image/jpeg");
				var doc = new jsPDF("p","mm","a4");
			    var width= doc.internal.pageSize.width;
				var height= doc.internal.pageSize.height;
				doc.addImage(data,'JPEG',0,0,width,height);
				doc.save('bill.pdf');
			
			}  
		  });
	  }*/
});




