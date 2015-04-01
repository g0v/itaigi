// Code goes here


網址='/json/'
var app = angular.module('app',[]);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});

app.controller("IntroController", 
    ['$scope','$http', function($scope,$http){
  $scope.questionList = [];
  $scope.questionContent = [];
  
  $scope.info = [];
  
  $http.get(網址+'列表/外語請教條')
    .success(function(data){
    	console.log('外語請教條 success');
      $scope.info=data;
      $scope.questionList=data['列表'];
  })
  	.catch(function(data, status) {
    console.error('外語請教條 error');
  });
  
  $scope.viewQuestion= function(編號){
	  $http.get(網址+'資料內容/'+編號)
	    .success(function(data){
	    	console.log('資料內容 success');
		      $scope.info=data;
		      $scope.questionContent=data;
	  })
	  	.catch(function(data, status) {
	    console.error('資料內容 error');
	  });
  }
  
}]);
