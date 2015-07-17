'use strict';

app.controller('HomeCtrl', ['$rootScope', '$scope', '$routeParams', '$filter', '$window', 'toastr',
	function($rootScope, $scope, $routeParams, $filter, $window, toastr) {

		$('html, body').css('background', '#fff');

		$('.home-page .content-1 .background-image img').each(function(n) {
            $(this).wrap('<figure class="tint"></figure>');
        });

	}]);