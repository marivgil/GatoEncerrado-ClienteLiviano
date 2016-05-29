var gatoEncerrado = angular.module('gatoEncerrado',[
    "ui.router"
  ]);

gatoEncerrado.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('CargandoService');
}]);
