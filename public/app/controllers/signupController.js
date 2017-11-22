angular.module('Controllers').controller('signupCtrl', function ($scope, $location, $rootScope, $socket,$http){		// Login Controller
	// Varialbles Initialization.
	$scope.userAvatar = "Avatar1.jpg";
	$scope.isErrorReq = false;
	$scope.isErrorNick = false;
    $scope.username = "";
    $scope.password = "";
    $scope.errorMessage = "";

	// redirection if user logged in.
	if($rootScope.loggedIn){
		$location.path('/v1/ChatRoom');
	}

	// Functions for controlling behaviour.
	$scope.signup = function(){
		if ($scope.username.length <= 20) {
			if($scope.username && $scope.password){
            
                var signupUrl = $rootScope.baseUrl +"/v1/signup?username="+$scope.username+"&password="+$scope.password+"&role="+$scope.role+"&roleid="+$scope.roleid

                $http.get(signupUrl).success(function (response){
                    if(response.success === true){
                        $location.path('/v1/');
                    }else{
                        $scope.errorMessage = "User Already exists";
                    }
                    // if(!response.isExpired){
                    //     msg.showme = false;
                    //     msg.serverfilename = msg.serverfilename;
                    //     $location.path('/v1/ChatRoom');
                    // }else{
                    //     $location.path('/v1')
                    // }
                });
				// $socket.emit('new user',{username : $scope.username, userAvatar : $scope.userAvatar},function(data){
				// 	if(data.success == true){	// if nickname doesn't exists	
				// 		$rootScope.username = $scope.username;
				// 		$rootScope.userAvatar = $scope.userAvatar;
				// 		$rootScope.loggedIn = true;
                //         console.log('opening chatroom');
				// 		$location.path('/v1/ChatRoom');					
				// 	}else{		// if nickname exists
				// 		$scope.errMsg = "Use different nickname.";
				// 		$scope.isErrorNick = true;
				// 		$scope.isErrorReq = true;
				// 		$scope.printErr($scope.errMsg);	
				// 	}			
				// });
			}else{		// blanck nickname 
				$scope.errMsg = "Enter a username and password";
				$scope.isErrorReq = true;
				$scope.printErr($scope.errMsg);
			}
		}else{		// nickname greater than limit
			$scope.errMsg = "Username exceed 20 charachters.";
			$scope.isErrorNick = true;
			$scope.isErrorReq = true;
			$scope.printErr($scope.errMsg);
		}
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
