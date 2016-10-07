
var app = angular.module("rentApp", []);

app.controller("rentCtrl", function($scope, $http) {
    $scope.price = null;

    $scope.checkData = function(){

		// when submitting form data, send the object to the node API
    	$http.post('/api/check_price', $scope.formData)
			.success(function(data) {

				$scope.price = data;

				if(data != -1){
					$scope.status = true;
				}else{
					$scope.status = false;
				}
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
    }
});
