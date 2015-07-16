'use strict';

app.directive('serbisyoAdsResult', [function() {
	
	return {
		restrict: 'E',
		templateUrl: 'views/templates/serbisyoAdsResult.html',
		replace: true,
		scope: {
			heading: '=',
			searchType: '=',
			results: '=',
			itemsPerPage: '=',
			currentPage: '=',
			numPages: '='
		},
		controller: function($scope) {
			console.log('serbisyoAdsResult');
			console.log($scope);
		}
	};

}]);

app.directive('serbisyoSearchFilter', [function() {
	
	return {
		restrict: 'E',
		templateUrl: 'views/templates/serbisyoSearchFilter.html',
		replace: true
	};

}]);

app.directive('serbisyoPagination', [function() {
	
	return {
		restrict: 'E',
		templateUrl: 'views/templates/pagination.html',
		replace: true
	};

}]);

app.directive('pageIndicator', [function() {
	
	return {
		restrict: 'E',
		template: '<strong class="pull-right">Page <span class="current-page">{{currentPage}}</span> of {{numPages}}</strong>',
		replace: true
	};

}]);

app.directive('sponsored', [function() {
	
	return {
		restrict: 'E',
		template: '<div class="sponsored-container"><small class="sponsored">{{text}}</small></div>',
		replace: true,
		link: function(scope, elem, attrs) {
			scope.text = attrs.text;
		}
	};

}]);

app.directive('serbisyoAssetDialog', [function() {
	
	return {
		restrict: 'E',
		templateUrl: 'views/dialogs/serviceAssetDialog.html',
		replace: true
	};

}]);