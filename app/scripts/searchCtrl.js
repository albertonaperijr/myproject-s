'use strict';

app.controller('SearchCtrl', ['$rootScope', '$scope', '$route', '$routeParams', '$window', '$modal', '$timeout', 'toastr',
	function($rootScope, $scope, $route, $routeParams, $window, $modal, $timeout, toastr) {

		$scope.routeParams = $routeParams;
		var classification = 'classification=' + $scope.routeParams.classification;
		var category = '&category=' + $scope.routeParams.category;
		var location = '&location=' + $scope.routeParams.location;
		var keyword = $scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '';
		var page = $scope.routeParams.page ? '&page=' + $scope.routeParams.page : '';
		var targetUrl;

		$timeout(function() {
			$('html, body').animate({scrollTop: 0}, 100);
		}, 300);

		if ($scope.routeParams.classification == 'all') {
			$scope.selectedSearchTypeId = '';
			$scope.selectedSearchTypeTitle = 'All Classifications';
			$scope.routeParams.page = 1;
			$scope.pageServicePackage = 1;
			$scope.pageServiceProvider = 1;
			$scope.pageForRent = 1;
			$scope.pageJobOpening = 1;
		} else {
			for (var i = $rootScope.searchType.length - 1; i >= 0; i--) {
				if ($scope.routeParams.classification.split('-').join(' ') == $rootScope.searchType[i].description.toLowerCase()) {
					$scope.selectedSearchTypeId = $rootScope.searchType[i].id;
					$scope.selectedSearchTypeTitle = $rootScope.searchType[i].description;
				}
			};

			if ($scope.routeParams.page) {
				$scope.pageServicePackage = $scope.routeParams.page;
				$scope.pageServiceProvider = $scope.routeParams.page;
				$scope.pageForRent = $scope.routeParams.page;
				$scope.pageJobOpening = $scope.routeParams.page;
			} else {
				$scope.routeParams.page = 1;
				$scope.pageServicePackage = 1;
				$scope.pageServiceProvider = 1;
				$scope.pageForRent = 1;
				$scope.pageJobOpening = 1;
			}
		}

		if ($scope.routeParams.category == 'all') {
			$scope.selectedCategoryId = '';
			$scope.selectedCategoryName = 'All Categories';
		} else {
			for (var i = $rootScope.lstCfgcategory.length - 1; i >= 0; i--) {
				if ($scope.routeParams.category.split('-').join(' ') == $rootScope.lstCfgcategory[i].cfgCategoryName.toLowerCase()) {
					$scope.selectedCategoryId = $rootScope.lstCfgcategory[i].pkCfgCategoryId;
					$scope.selectedCategoryName = $rootScope.lstCfgcategory[i].cfgCategoryName;
				}
			};
		}

		$scope.setSearchType = function(searchType) {
			if (searchType) {
				classification = 'classification=' + (searchType.description ? searchType.description.split(' ').join('-').toLowerCase() : 'all');
			} else {
				classification = 'classification=all';
			}
			page = searchType ? '&page=1' : '';
			targetUrl = '#/search?' + classification + category + location + keyword + page;
			$window.location.href = targetUrl;
		};

		$scope.setCfgCategory = function(cfgCategory) {
			if (cfgCategory) {
				category = '&category=' + (cfgCategory.cfgCategoryName ? cfgCategory.cfgCategoryName.split(' ').join('-').toLowerCase() : 'all');
			} else {
				category = '&category=all';
			}
			page = ($scope.routeParams.classification == 'all') ? '' : '&page=1';
			targetUrl = '#/search?' + classification + category + location + keyword + page;
			$window.location.href = targetUrl;
		};

		$scope.pageChangeServicePackage = function() {
			if ($scope.routeParams.page != $scope.pageServicePackage) {
				page = '&page=' + $scope.pageServicePackage;
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.pageChangeServiceProvider = function() {
			if ($scope.routeParams.page != $scope.pageServiceProvider) {
				page = '&page=' + $scope.pageServiceProvider;
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.pageChangeForRent = function() {
			if ($scope.routeParams.page != $scope.pageForRent) {
				page = '&page=' + $scope.pageForRent;
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.pageChangeJobOpening = function() {
			if ($scope.routeParams.page != $scope.pageJobOpening) {
				page = '&page=' + $scope.pageJobOpening;
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.browseMore = function(searchType) {
			classification = 'classification=' + searchType.split(' ').join('-').toLowerCase();
			page = '&page=1';
			targetUrl = '#/search?' + classification + category + location + keyword + page;
			$window.location.href = targetUrl;
		};

		$scope.showMoreCategory = function() {
			$scope.limitCategory = $rootScope.lstCfgcategory.length;
		};

		$scope.showLessCategory = function() {
			
			$scope.limitCategory = 10;
		};

		$scope.showModal = function() {
			var modalInstance = $modal.open({
				templateUrl: 'views/dialogs/dialog.html',
				controller: 'ConfirmDialogCtrl',
				size: 'sm'
			});
			modalInstance.result.then(function() {

			}, function() {

			});
		};

	}]);