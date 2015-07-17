'use strict';

app.controller('MainCtrl', ['$rootScope', '$scope', '$location', '$routeParams', 'toastr',
	function($rootScope, $scope, $location, $routeParams, toastr) {

		$rootScope.viewportWidth = $(window).width();
        $rootScope.domain = $location.host();
        $rootScope.path = $location.path();
        $rootScope.urlPath = $location.url();

        // if ($rootScope.path.indexOf('/home') = -1) {
        //     toastr.info('yes');
        //     $('html, body').css('background', '#fff');
        // }

        // detect viewport size
        $(window).resize(function() {
        	$scope.$apply(function() {
        		$rootScope.viewportWidth = $(window).width();
                // toastr.info($rootScope.viewportWidth);
        	});
        });

    }]);