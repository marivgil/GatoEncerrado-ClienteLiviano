var gatoEncerrado = angular.module('gatoEncerrado',[
    "ui.router",
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.modal',
    'ngAnimate'

]);

gatoEncerrado.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('CargandoService');
}]);

gatoEncerrado.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
