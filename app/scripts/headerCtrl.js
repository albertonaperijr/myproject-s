'use strict';

app.controller('HeaderCtrl', ['$rootScope', '$scope', '$routeParams', '$filter', '$window', 'toastr',
	function($rootScope, $scope, $routeParams, $filter, $window, toastr) {

		console.log($routeParams);
		$scope.routeParams = $routeParams;
		var classification = 'classification=' + $scope.routeParams.classification;
		var category = '&category=' + $scope.routeParams.category;
		var location = '&location=' + $scope.routeParams.location;
		var keyword = $scope.routeParams.keyword ? '&keyword=' + $scope.routeParams.keyword : '';
		var page = $scope.routeParams.page ? '&page=' + $scope.routeParams.page : '';
		var targetUrl;
		var openedToasts = [];

        $(window).scroll(function() {
            var verticalScrollPosition = $(this).scrollTop();
            if (verticalScrollPosition > 200) {
            	$('.go-to-top').css('opacity', '1');
            } else {
            	$('.go-to-top').css('opacity', '0');
            }
        });

		$scope.goToTop = function() {
			$('html, body').animate({scrollTop: 0}, 300);
			var toast = openedToasts.pop();
      		toastr.clear(toast);
		};

		$scope.search = {
			key: $routeParams.keyword ? $routeParams.keyword.split('--').join(' ') : '',
			location: $routeParams.location == 'all' ? '' : $routeParams.location
		};

		$scope.searchSerbisyo = function() {
			$window.location.href = '#/search?'
				+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
				+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
				+ '&location=' + ($scope.search.location ? $scope.search.location : 'all')
				+ ($scope.search.key ? '&keyword=' + $scope.search.key.split(' ').join('--') : '');
		};

		$scope.searchSerbisyo = function() {
			classification = 'classification=' + searchType.split(' ').join('-').toLowerCase();
			page = '&page=1';
			targetUrl = '#/search?' + classification + category + location + keyword + page;
			$window.location.href = targetUrl;
		};

		$scope.login = function() {
			toastr.info('Login successful');
			$rootScope.loggedIn = true;
		};

		$scope.logoutUser = function() {
			toastr.info('Logout successful');
			$rootScope.loggedIn = false;
		};

	}]);