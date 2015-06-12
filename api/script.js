// Code goes here


網址='http://localhost:8000/'
var app = angular.module('app',[]);

app.config(function($httpProvider) {
		// Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
                $httpProvider.defaults.withCredentials = true;
});

app.controller("IntroController", 
		['$scope','$http', function($scope,$http){
	$scope.serverDomain=網址;
			
	$scope.info = [];

	$scope.user_id = '無登入';
	
	$scope.listType='列表';
	$scope.questionList = [];
	$scope.suggestedQuestionList = [];
	$scope.questionContent = [];
	
	$scope.keyword='漂亮';
	

	$http.get(網址+'使用者/看編號')
		.success(function(data){
			console.log('使用者/看編號 ok');
			$scope.user_id = data['使用者編號'];
		})
			.catch(function(data, status) {
			console.error('使用者/看編號 error');
		});
	
	
	$scope.showList=function(){
		$http.get(網址+'平臺項目列表/看列表')
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
		$http.get(網址+'平臺項目列表/揣列表',{'params':{'關鍵字':$scope.keyword}})
			.success(function(data){
				console.log('揣外語請教條 success');
				$scope.listType='搜尋結果';
				$scope.info=data;
				$scope.questionList=data['列表'];
				$scope.suggestedQuestionList=data['其他建議'];
		})
			.catch(function(data, status) {
			console.error('揣外語請教條 error');
		});
	}

	下載詳細資料 =function (資料,編號欄位名)
	{
		$http.get(網址+'平臺項目/看詳細內容',{'params':{'平臺項目編號':資料[編號欄位名]}})
		.success(function(data){
			console.log('詳細內容 success');
			資料['詳細']=data;
			$scope.info=data;
	})
	};
	$scope.viewQuestion= function(編號){
		$http.get(網址+'平臺項目/看對應內容',{'params':{'平臺項目編號':編號}})
			.success(function(data){
				console.log('資料內容 success');
					$scope.info=data;
					$scope.questionContent=data;
					下載詳細資料($scope.questionContent,"外語請教條項目編號");
					angular.forEach($scope.questionContent["新詞文本"], function(textContent) {
						下載詳細資料(textContent,"新詞文本項目編號");
					});
					angular.forEach($scope.questionContent["新詞影音"], function(audioContent) {
//						下載詳細資料(audioContent,"新詞影音項目編號");
						audioContent['影音資料網址']=(網址+audioContent['影音資料網址'].substr(1));
					});
		})
			.catch(function(data, status) {
			console.error('資料內容 error');
		});
	}

	$scope.csrftoken='';
	$http.get(網址+'csrf/看')
		.success(function(data){
			console.log('看csrf success');
				$scope.info=data;
				$scope.csrftoken=data['csrftoken'];
				
//				$http.defaults.headers.post['X-CSRFToken']=data['csrftoken'];
		})
		.catch(function(data, status) {
				console.error('看csrf error');
			});


	$scope.addQuestion= function(種類,外語語言,外語資料){
		data = {
				'來源':JSON.stringify("自己"),
				'種類':種類,
				'語言腔口':'閩南語',
				'著作所在地':'臺灣',
				'著作年':new Date().getFullYear().toString(),
				'屬性':'{}',
				'外語語言':外語語言,
				'外語資料':外語資料,
				};
		$http({
		    method: 'POST',
		    url: 網址+'平臺項目/加外語請教條',
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
			console.log('加外語請教條 success');
				$scope.info=data;
				$scope.viewQuestion(data['平臺項目編號']);
	})
		.catch(function(data, status) {
		console.error('加外語請教條 error');
	});
	};

	$scope.voice_file='';

	$scope.addVoiceSuggestion=function (外語請教條項目編號,種類){
		recorder && recorder.exportWAV(function(audioBlob){
			var formData = new FormData();
	
			formData.append("外語請教條項目編號", 外語請教條項目編號);
			formData.append("來源", JSON.stringify("自己"));
			formData.append("種類", 種類);
			formData.append("語言腔口", '閩南語');
			formData.append("著作所在地", '臺灣');
			formData.append("著作年", new Date().getFullYear().toString());
			formData.append("屬性", '{}');
			formData.append("影音資料",audioBlob);
			
			$http({
				method: 'POST',
				url: 網址+'平臺項目/加新詞影音',
				headers: {
					'Content-Type': undefined,//重要！！！！！
					'X-CSRFToken':$scope.csrftoken,
				},
				data:formData,
				transformRequest:angular.identity,
			})
				.success(function(data){
					console.log('新詞影音 success');
					$scope.info=data;
					$scope.viewQuestion(外語請教條項目編號);
				})
				.catch(function(data, status) {
					console.error('新詞影音 error');
				});
		});
	};
		
		
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
			url: 網址+'平臺項目/加外語新詞文本',
			'data': data,
			headers:
			{
				'Content-Type': 'application/x-www-form-urlencoded',
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

	__log= function (e, data) {
//	    log.innerHTML += "\n" + e + " " + (data || '');
	    console.log( e + " " + (data || ''));
	  }

	  var audio_context;
	  var recorder;

	  startUserMedia=function (stream) {
	    var input = audio_context.createMediaStreamSource(stream);
	    __log('Media stream created.');

	    // Uncomment if you want the audio to feedback directly
	    //input.connect(audio_context.destination);
	    //__log('Input connected to audio context destination.');
	    
	    recorder = new Recorder(input);
	    __log('Recorder initialised.');
	  }
	  $scope.recording=false;
	$scope.startRecording=  function (button) {
			recorder && recorder.clear();
	    recorder && recorder.record();
	    $scope.recording=true;
//	    button.disabled = true;
//	    button.nextElementSibling.disabled = false;
	    __log('Recording...');
	  }

	$scope.stopRecording= function (button) {
	    recorder && recorder.stop();
	    $scope.recording=false;
//	    button.disabled = true;
//	    button.previousElementSibling.disabled = false;
	    __log('Stopped recording.');
	    
	    // create WAV download link using audio data blob
	    createDownloadLink();
	    
	  }

	 createDownloadLink= function () {
	    recorder && recorder.exportWAV(function(blob) {
	      var url = URL.createObjectURL(blob);
	      var au = document.getElementById('audio');
	      var hf = document.getElementById('audio_a');
	      
	      au.controls = true;
	      au.src = url;
	      hf.href = url;
	      hf.download = new Date().toISOString() + '.wav';
	      hf.innerHTML = hf.download;
	    });
	  }

	  window.onload = function init() {
	    try {
	      // webkit shim
	      window.AudioContext = window.AudioContext || window.webkitAudioContext;
	      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	      window.URL = window.URL || window.webkitURL;
	      
	      audio_context = new AudioContext;
	      __log('Audio context set up.');
	      __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
	    } catch (e) {
	      alert('No web audio support in this browser!');
	    }
	    
	    navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
	      __log('No live audio input: ' + e);
	    });
	  };
}]);
