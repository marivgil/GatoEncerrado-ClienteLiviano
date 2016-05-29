gatoEncerrado.controller("LaberintosController", ['$scope', 'resolveResponse', 'laberintosService', function ($scope, resolveResponse, laberintosService) {
    $scope.laberintos = resolveResponse.data;
}]);