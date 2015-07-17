'use strict';

app.controller('HeaderCtrl', ['$rootScope', '$scope', '$routeParams', '$filter', '$window', 'toastr',
	function($rootScope, $scope, $routeParams, $filter, $window, toastr) {

		console.log($routeParams);
		$scope.routeParams = $routeParams;
		var classification = 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all');
		var category = '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all');
		var location = '&location=' + $scope.routeParams.location;
		var keyword = $scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '';
		var page = $scope.routeParams.page ? '&page=' + $scope.routeParams.page : '';
		var routeParamsLocation = !$scope.routeParams.location ? '' : $scope.routeParams.location == 'all' ? '' : $scope.routeParams.location.split('-').join(' ');
		var routeParamsKeyword = $scope.routeParams.keyword ? $scope.routeParams.keyword.split('--').join(' ') : '';
		var targetUrl;
		var openedToasts = [];

		$scope.search = {
			keyword: routeParamsKeyword,
			location: routeParamsLocation
		};

        $(window).scroll(function() {
            var verticalScrollPosition = $(this).scrollTop();
            if (verticalScrollPosition > 200) {
            	$('.go-to-top').css('opacity', '1');
            } else {
            	$('.go-to-top').css('opacity', '0');
            }
        });

		if ($scope.routeParams.location == 'all' || !$scope.routeParams.location) {
			$scope.citytownId = '';
		} else {
			for (var i = $rootScope.lstCfgCitytown.length - 1; i >= 0; i--) {
				if ($scope.routeParams.location.split('-').join(' ') == $rootScope.lstCfgCitytown[i].citytownName) {
					$scope.citytownId = $rootScope.lstCfgCitytown[i].pkCfgCitytownId;
				}
			};
		}

		$scope.setCitytown = function(citytown) {
			$scope.citytownId = citytown.pkCfgCitytownId;
		};

		$scope.clearCitytown = function() {
			$scope.citytownId = '';
		};

		$scope.login = function() {
			toastr.info('Login successful');
			$rootScope.loggedIn = true;
		};

		$scope.logoutUser = function() {
			toastr.info('Logout successful');
			$rootScope.loggedIn = false;
		};

		$scope.goToTop = function() {
			$('html, body').animate({scrollTop: 0}, 300);
			// var toast = openedToasts.pop();
   //    		toastr.clear(toast);
		};

		$scope.searchSerbisyo = function() {
			if ($scope.search.location != routeParamsLocation || $scope.search.keyword != routeParamsKeyword || !$scope.routeParams.classification || !$scope.routeParams.category) {
				location = '&location=' + ($scope.search.location ? $scope.search.location.split(' ').join('-') : 'all');
				keyword = $scope.search.keyword ? '&keyword=' + $scope.search.keyword.split(' ').join('--') : '';
				page = '&page=1';
				targetUrl = '#/search?' + classification + category + location + keyword + page;
				$window.location.href = targetUrl;
			}
		};

	}]);