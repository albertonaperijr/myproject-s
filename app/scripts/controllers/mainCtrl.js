'use strict';

app.controller('MainCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$timeout', 'toastr',
	function($rootScope, $scope, $location, $routeParams, $timeout, toastr) {

		$rootScope.viewportWidth = $(window).width();
        $rootScope.domain = $location.host();
        $rootScope.path = $location.path();
        $rootScope.urlPath = $location.url();

        $scope.$on('$locationChangeSuccess', function() {
            $rootScope.path = $location.path();

            // if ($rootScope.path == '/') {
            //     toastr.info('yes');
            //     $timeout(function() {
            //         $('html, body').css('background', '#fff');
            //     }, 1000);
            // } else {
            //     toastr.error('no');

            //     $('html, body').css('background', '#E5E5E5');
            // }
        });

        // detect viewport size
        $(window).resize(function() {
        	$scope.$apply(function() {
        		$rootScope.viewportWidth = $(window).width();
                // toastr.info($rootScope.viewportWidth);
        	});
        });

    }]);