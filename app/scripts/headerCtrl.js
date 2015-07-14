'use strict';

app.controller('HeaderCtrl', ['$rootScope', '$scope', '$routeParams', '$filter', '$window',
	function($rootScope, $scope, $routeParams, $filter, $window) {

		console.log($routeParams);
		$scope.routeParams = $routeParams;

        $(window).scroll(function() {
            var verticalScrollPosition = $(this).scrollTop();
            if (verticalScrollPosition > 200) {
            	$('.go-to-top').css('opacity', '1');
            } else {
            	$('.go-to-top').css('opacity', '0');
            }
        });

		$scope.search = {
			key: $routeParams.keyword ? $routeParams.keyword.split('--').join(' ') : '',
			location: $routeParams.location == 'all' ? '' : $routeParams.location
		};

		$scope.goToTop = function() {
			$('html, body').animate({scrollTop: 0}, 300);
		};

		$scope.searchSerbisyo = function() {
			$window.location.href = '#/search?'
				+ 'classification=' + ($scope.routeParams.classification ? $scope.routeParams.classification : 'all')
				+ '&category=' + ($scope.routeParams.category ? $scope.routeParams.category : 'all')
				+ '&location=' + ($scope.search.location ? $scope.search.location : 'all')
				+ ($scope.search.key ? '&keyword=' + $scope.search.key.split(' ').join('--') : '');
		};

		$scope.login = function() {
			toastr.info('Login successful');
			$rootScope.loggedIn = true;
		};

		$scope.logout = function() {
			toastr.info('Logout successful');
			$rootScope.loggedIn = false;
		};

	}]);