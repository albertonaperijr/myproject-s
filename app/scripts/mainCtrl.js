'use strict';

app.controller('MainCtrl', ['$rootScope', '$scope', '$location', '$routeParams',
	function($rootScope, $scope, $location, $routeParams) {

		$rootScope.viewportWidth = $(window).width();
        $rootScope.domain = $location.host();
        $rootScope.path = $location.path();
        $rootScope.urlPath = $location.url();
        toastr.options = {
        	closeButton: true,
        	preventDuplicates: true,
        	tapToDismiss: true,
        	positionClass: 'toast-bottom-right'
        };

        // detect viewport size
        $(window).resize(function() {
        	$scope.$apply(function() {
        		$rootScope.viewportWidth = $(window).width();
        	});
        });

    }]);