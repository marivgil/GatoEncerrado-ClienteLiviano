gatoEncerrado.controller("LaberintoController", ['$scope', 'resolveResponse', function ($scope, resolveResponse) {
    var data = resolveResponse.data;
    console.log(data);
    $scope.laberinto = data;
}]);