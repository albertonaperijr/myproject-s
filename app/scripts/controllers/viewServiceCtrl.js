'use strict';

app.controller('ViewServiceCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$timeout', 'toastr', 'SharedDataFactory',
	function($rootScope, $scope, $location, $routeParams, $timeout, toastr, SharedDataFactory) {

		$scope.routeParams = $routeParams;

		console.log(SharedDataFactory);
		$scope.service = SharedDataFactory.service;
		$scope.results = $rootScope.lstServicePackageResult;
		$scope.itemsPerPage = 10;
		$scope.currentPage = 1;

		$scope.showServiceAssetDialogBox = function(result) {
			$scope.result = result;
			$scope.scaleDialog = true;
			$scope.showServiceAssetDialog = true;
			$('html, body').css('overflow', 'hidden');
		};

		$scope.closeServiceAssetDialogBox = function() {
			$scope.scaleDialog = false;
			$timeout(function() {
				$scope.showServiceAssetDialog = false;
				$('html, body').css('overflow', 'auto');
			}, 50);
		};

    }]);