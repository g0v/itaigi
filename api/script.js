// Code goes here


網址='/'
var app = angular.module('app',[]);

app.config(function($httpProvider) {
		// Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
});

app.controller("IntroController", 
		['$scope','$http', function($scope,$http){
	
	$scope.info = [];

	$scope.email = '';
	
	$scope.listType='列表';
	$scope.questionList = [];
	$scope.suggestedQuestionList = [];
	$scope.questionContent = [];
	
	$scope.keyword='漂亮';
	
	$scope.showList=function(){
		$http.get(網址+'列表/外語請教條')
			.success(function(data){
				console.log('外語請教條列表success');
				$scope.listType='外語請教條列表';
				$scope.info=data;
				$scope.questionList=data['列表'];
				$scope.suggestedQuestionList=[];
		})
			.catch(function(data, status) {
			console.error('外語請教條列表 error');
		});
	}

	$scope.searchList=function(){
		$http.get(網址+'揣/外語請教條',{'params':{'關鍵字':$scope.keyword}})
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
		$http.get(網址+'資料內容',{'params':{'平臺項目編號':編號}})
			.success(function(data){
				console.log('資料內容 success');
					$scope.info=data;
					$scope.questionContent=data;
		})
			.catch(function(data, status) {
			console.error('資料內容 error');
		});
	}

	$scope.csrftoken='';
	$http.get(網址+'看csrf')
		.success(function(data){
			console.log('看csrf success');
				$scope.info=data;
				$scope.csrftoken=data['csrftoken'];
				
//				$http.defaults.headers.post['X-CSRFToken']=data['csrftoken'];
		})
		.catch(function(data, status) {
				console.error('看csrf error');
			});

	$scope.textSuggestion='一工工';
	$scope.addTextSuggestion= function(外語請教條項目編號,種類,文本資料){
		data = {
				'外語請教條項目編號':外語請教條項目編號,
				'來源':JSON.stringify("自己"),
				'種類':種類,
				'語言腔口':'閩南語',
				'著作所在地':'臺灣',
				'著作年':new Date().getFullYear().toString(),
				'屬性':'{}',
				'文本資料':文本資料,
				};
		$http({
		    method: 'POST',
		    url: 網址+'加資料/外語新詞文本',
// data: data,
		    'data': data,
		    
		    headers: {'Content-Type': 'application/x-www-form-urlencoded',
		    	'X-CSRFToken':$scope.csrftoken,
		    	},
	    transformRequest: function(obj) {
	        var str = [];
	        for(var p in obj)
	        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	        return str.join("&");
	    },
		})
		// $http.post(網址+'加資料/外語新詞文本',{'params':})
		.success(function(data){
			console.log('外語新詞文本 success');
				$scope.info=data;
				$scope.viewQuestion(外語請教條項目編號);
	})
		.catch(function(data, status) {
		console.error('外語新詞文本 error');
	});
	};
}]);
