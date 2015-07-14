'use strict';

app.controller('SearchCtrl', ['$rootScope', '$scope', '$routeParams', '$window', '$modal',
	function($rootScope, $scope, $routeParams, $window, $modal) {

		$scope.routeParams = $routeParams;
		setTimeout(function() {
			$('html, body').animate({scrollTop: 0}, 100);
		}, 300);
		toastr.info('Loading');

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
				$window.location.href = '#/search?'
					+ 'classification=' + (searchType.description ? searchType.description.split(' ').join('-').toLowerCase() : 'all')
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=1';
			} else {
				$window.location.href = '#/search?'
					+ 'classification=all'
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '');
			}
		};

		$scope.setCfgCategory = function(cfgCategory) {
			if (cfgCategory) {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=' + (cfgCategory.cfgCategoryName ? cfgCategory.cfgCategoryName.split(' ').join('-').toLowerCase() : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=1';
			} else {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=all'
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '');
			}
		};

		$scope.pageChangeServicePackage = function() {
			if ($scope.routeParams.page != $scope.pageServicePackage) {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=' + $scope.pageServicePackage;
			}
		};

		$scope.pageChangeServiceProvider = function() {
			if ($scope.routeParams.page != $scope.pageServiceProvider) {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=' + $scope.pageServiceProvider;
			}
		};

		$scope.pageChangeForRent = function() {
			if ($scope.routeParams.page != $scope.pageForRent) {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=' + $scope.pageForRent;
			}
		};

		$scope.pageChangeJobOpening = function() {
			if ($scope.routeParams.page != $scope.pageJobOpening) {
				$window.location.href = '#/search?'
					+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
					+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
					+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
					+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
					+ '&page=' + $scope.pageJobOpening;
			}
		};

		$scope.browseMore = function(searchType) {
			$window.location.href = '#/search?'
				+ 'classification=' + searchType.split(' ').join('-').toLowerCase()
				+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
				+ '&location=' + ($scope.routeParams.location ? $scope.routeParams.location : 'all')
				+ ($scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '')
				+ '&page=1';
		};

		$scope.showModal = function() {
			var modalInstance = $modal.open({
                templateUrl: 'views/dialogs/dialog.html',
                controller: 'ConfirmDialogCtrl',
                size: 'lg'
            });
            modalInstance.result.then(function() {
                
            }, function() {

            });
		};

        function scrollTo(targetId) {
            var topOffset;
            var destination;
            if (viewportWidth > 991) {
                topOffset = 146;
            } else {
                topOffset = 80;
            }
            setTimeout(function() {
                destination = $(targetId).offset().top - topOffset;
                $('html, body').animate({scrollTop: destination}, 300);
                setTimeout(function() {
                    $(targetId).focus();
                }, 300);
            }, 300);
        }

	}]);