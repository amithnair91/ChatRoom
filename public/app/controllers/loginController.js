angular.module('Controllers',[])
.directive('focusMe', function($timeout) {	// Custom directive for focus
    return {
        link: function(scope, element, attrs) {
          scope.$watch(attrs.focusMe, function(value) {
            if(value === true) { 
              $timeout(function() {
                element[0].focus();
                scope[attrs.focusMe] = false;
              });
            }
          });
        }
    };
})
.controller('loginCtrl', function ($scope, $location, $rootScope, $socket,$http){		// Login Controller
	// Varialbles Initialization.
	$scope.userAvatar = "Avatar1.jpg";
	$scope.isErrorReq = false;
	$scope.isErrorNick = false;
	$scope.username = "";
	$scope.errorMessage = ""

	// redirection if user logged in.
	if($rootScope.loggedIn){
		$location.path('/v1/ChatRoom');
	}

	// Functions for controlling behaviour.
	$scope.redirect = function(){
		if ($scope.username.length <= 20) {
			if($scope.username && $scope.password){

				var loginUrl = $rootScope.baseUrl +"/v1/login?username="+$scope.username+"&password="+$scope.password

				$http.get(loginUrl).success(function (response){
					console.log("@@@@@@@@@@@@@@",response)
					if(response[0].success === true){
						$socket.emit('new user',{username : $scope.username, userAvatar : $scope.userAvatar},function(data){
							if(data.success == true){	// if nickname doesn't exists	
								$rootScope.username = $scope.username;
								$rootScope.userAvatar = $scope.userAvatar;
								$rootScope.loggedIn = true;
								console.log('opening chatroom');
								$location.path('/v1/ChatRoom');					
							}else{		// if nickname exists
								$scope.errMsg = "Use different nickname.";
								$scope.isErrorNick = true;
								$scope.isErrorReq = true;
								$scope.printErr($scope.errMsg);	
							}			
						});
					}else{
						$scope.errorMessage = "Invalid Credentials"
					}
			});	
			}else{		// blanck nickname 
				$scope.errMsg = "Enter a nickname.";
				$scope.isErrorReq = true;
				$scope.printErr($scope.errMsg);
			}
		}else{		// nickname greater than limit
			$scope.errMsg = "Nickname exceed 20 charachters.";
			$scope.isErrorNick = true;
			$scope.isErrorReq = true;
			$scope.printErr($scope.errMsg);
		}
	}

	$scope.redirectToSignup = function(){
		$location.path('/v1/signup');
	}

	$scope.printErr = function(msg){	// popup for error message
		var html = '<p id="alert">'+ msg +'</p>';
		if ($( ".chat-box" ).has( "p" ).length < 1) {
			$(html).hide().prependTo(".chat-box").fadeIn(1500);
			$('#alert').delay(1000).fadeOut('slow', function(){
				$('#alert').remove();
			});
		};
	}
	$scope.changeAvatar = function(avatar){		// secting different avatar
			$scope.userAvatar = avatar;
	}
})
