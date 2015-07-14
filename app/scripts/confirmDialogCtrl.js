'use strict';

app.controller('ConfirmDialogCtrl', ['$scope', '$modalInstance',
	function($scope, $modalInstance) {

		$scope.yes = function() {
			$modalInstance.close(true);
		};

		$scope.no = function() {
			$modalInstance.dismiss('cancel');
		};

		// $scope.htmlReady();

	}]);