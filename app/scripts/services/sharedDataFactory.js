'use strict';

app.factory('SharedDataFactory', ['$rootScope', function($rootScope) {

		var sharedDataFactory = {
			service: $rootScope.service
		};

		return sharedDataFactory;

    }]);