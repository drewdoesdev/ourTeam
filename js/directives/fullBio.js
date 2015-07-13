app.directive('fullBio', function() {
    return {
    	restrict: 'E',
    	scope: {
    		info: '='
    	},
    	templateUrl: "js/directives/fullBio.html"
    };
});