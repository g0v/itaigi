// Code goes here


網址='/json/'
var app = angular.module('app',[]);

app.config(function($httpProvider) {
		//Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
});

app.controller("IntroController", 
		['$scope','$http', function($scope,$http){
			
	$scope.info = [];
	
	$scope.listType='列表';
	$scope.questionList = [];
	$scope.suggestedQuestionList = [];
	$scope.questionContent = [];
	
	$scope.keyword='美';
	
	$scope.showList=function(){
		$http.get(網址+'列表/外語請教條')
			.success(function(data){
				console.log('外語請教條列表success');
				$scope.listType='外語請教條列表';
				$scope.info=data;
				$scope.questionList=data['列表'];
		})
			.catch(function(data, status) {
			console.error('外語請教條列表 error');
		});
	}

	$scope.searchList=function(){
		$http.get(網址+'揣/外語請教條',{params:{'關鍵字':$scope.keyword}})
			.success(function(data){
				console.log('揣外語請教條 success');
				$scope.listType='搜尋結果';
				$scope.info=data;
				$scope.questionList=data['資料'];
				$scope.suggestedQuestionList=data['其他建議'];
		})
			.catch(function(data, status) {
			console.error('揣外語請教條 error');
		});
	}
	
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
