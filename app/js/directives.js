'use strict';

angular.module('laberintosApp', [])


.directive('footerInfo', function() {
    return {
    	restrict : 'E',
    	templateUrl: 'app/partials/footer-info.html'
    }
});