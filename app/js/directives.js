'use strict';

angular.module('laberintosApp', [])


.directive('footerInfo', function() {
    return {
    	restrict : 'AE',
    	templateUrl: 'app/partials/footer-info.html'
    }
});