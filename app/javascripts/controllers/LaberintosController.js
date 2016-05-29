gatoEncerrado.controller("LaberintosController", ['$scope', 'resolveResponse', 'laberintosService', function ($scope, resolveResponse, laberintosService) {
    var data = resolveResponse.data;
    console.log(data);
    $scope.laberintos = data;
}]);