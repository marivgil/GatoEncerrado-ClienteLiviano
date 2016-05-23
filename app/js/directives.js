'use strict';

angular.module('laberintosApp', [])


.directive('footerInfo', function() {
    return {
    	restrict : 'AE',
    	templateUrl: 'partials/footer-info.html'
    }
});