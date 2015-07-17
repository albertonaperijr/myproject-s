'use strict';

app.controller('SearchCtrl', ['$rootScope', '$scope', '$route', '$routeParams', '$window', '$modal', '$timeout', 'toastr', 'SharedDataFactory',
	function($rootScope, $scope, $route, $routeParams, $window, $modal, $timeout, toastr, SharedDataFactory) {

		$scope.routeParams = $routeParams;
		$scope.itemsPerPage = 10;
		var classification = 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all');
		var category = '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all');
		var location = '&location=' + $scope.routeParams.location;
		var keyword = $scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '';
		var page = '&page=' + ($scope.routeParams.page ? $scope.routeParams.page : '1');
		var targetUrl;

		$timeout(function() {
			$('html, body').animate({scrollTop: 0}, 100);
		}, 300);

		if ($scope.routeParams.page) {
			$scope.currentPage = $scope.routeParams.page;
		} else {
			$scope.routeParams.page = 1;
			$scope.currentPage = 1;
		}

		if ($scope.routeParams.classification == 'all' || !$scope.routeParams.classification) {
			$scope.selectedSearchTypeId = '';
			$scope.selectedSearchTypeTitle = 'All Classifications';
			$scope.results = $rootScope.lstAllClassificationResult;
			checkPages();
		} else {
			for (var i = $rootScope.searchType.length - 1; i >= 0; i--) {
				if ($scope.routeParams.classification.split('-').join(' ') == $rootScope.searchType[i].description.toLowerCase()) {
					$scope.selectedSearchTypeId = $rootScope.searchType[i].id;
					$scope.selectedSearchTypeTitle = $rootScope.searchType[i].description;

					if ($scope.selectedSearchTypeId == 1) {
						$scope.results = $rootScope.lstServiceResult;
					} else if ($scope.selectedSearchTypeId == 2) {
						$scope.results = $rootScope.lstServicePackageResult;
					} else if ($scope.selectedSearchTypeId == 3) {
						$scope.results = $rootScope.lstForRentResult;
					} else if ($scope.selectedSearchTypeId == 4) {
						$scope.results = $rootScope.lstJobOpeningResult;
					}
					checkPages();
				}
			};
		}

		if ($scope.routeParams.category == 'all' || !$scope.routeParams.category) {
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

		if ($scope.routeParams.location == 'all' || !$scope.routeParams.location) {
			$scope.citytownId = '';
		} else {
			for (var i = $rootScope.lstCfgCitytown.length - 1; i >= 0; i--) {
				if ($scope.routeParams.location.split('-').join(' ') == $rootScope.lstCfgCitytown[i].citytownName) {
					console.log($rootScope.lstCfgCitytown[i]);
					$scope.citytownId = $rootScope.lstCfgCitytown[i].pkCfgCitytownId;
				}
			};
		}

		function checkPages() {
			if ($scope.routeParams.page > calculateTotalPages()) {
				page = '&page=1';
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		}

		function calculateTotalPages() {
			var totalPages = $scope.itemsPerPage < 1 ? 1 : Math.ceil($scope.results.length / $scope.itemsPerPage);
			return Math.max(totalPages || 0, 1);
		}

		$scope.setSearchType = function(searchType) {
			if (searchType) {
				classification = 'classification=' + (searchType.description ? searchType.description.split(' ').join('-').toLowerCase() : 'all');
			} else {
				classification = 'classification=all';
			}
			if (classification != ('&classification=' + $scope.routeParams.classification)) {
				page = '&page=1';
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.setCfgCategory = function(cfgCategory) {
			if (cfgCategory) {
				category = '&category=' + (cfgCategory.cfgCategoryName ? cfgCategory.cfgCategoryName.split(' ').join('-').toLowerCase() : 'all');
			} else {
				category = '&category=all';
			}
			if (category != ('&category=' + $scope.routeParams.category)) {
				page = '&page=1';
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.pageChange = function() {
			if ($scope.routeParams.page != $scope.currentPage) {
				page = '&page=' + $scope.currentPage;
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

		$scope.showMoreCategory = function() {
			$scope.limitCategory = $rootScope.lstCfgcategory.length;
		};

		$scope.showLessCategory = function() {
			$scope.limitCategory = 10;
		};

		$scope.redirectToViewService = function(result) {
			toastr.info('service');
			console.log(result);
			$scope.closeServiceAssetDialogBox();
			SharedDataFactory.service = result;
			$window.location.href = '#/service/' + result.publishedserviceId;
		};

		$scope.redirectToViewJobpost = function(result) {
			toastr.info('jobpost');
		};

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

		// $.fn.hasScrollBar = function() {
	 //        return this.get(0).scrollHeight > this.height();
	 //    }

	    $('#serviceAssetDialog').scroll(function() {
	    	console.log('xxxxxxxxxxxxxxx');
            toastr.info('yes');
            var verticalScrollPosition = $('.serbisyo-modal').scrollTop();
            if (verticalScrollPosition > 200) {
            	$('.go-to-top').css('opacity', '1');
            } else {
            	$('.go-to-top').css('opacity', '0');
            }
        });

        $(document).on('scroll', '#serviceAssetDialog', function(){
		    console.log('Event Fired');
		});

		$scope.showModal = function() {
			var modalInstance = $modal.open({
				templateUrl: 'views/dialogs/servicePackageDialog.html',
				controller: 'ConfirmDialogCtrl',
				size: 'sm'
			});
			modalInstance.result.then(function() {

			}, function() {

			});
		};

	}]);