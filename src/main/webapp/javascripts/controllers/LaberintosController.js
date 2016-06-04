gatoEncerrado.controller("LaberintosController", ['$scope', 'resolveResponse', 'laberintosService', 
	function ($scope, resolveResponse, laberintosService) {
    // $scope.laberintos = resolveResponse.data;
    $scope.obtenerLaberintos = function() {
        laberintosService.obtenerLaberintos(function(data) {
            self.libros = data;
            self.noLeidos.autores = obtenerAutores(data);       
        }, errorHandler);
    };

    self.idJugdor= {id:1};

    this.obtenerLaberintos = function(){
        laberintosService.obtenerLaberintos(
                self.idJugdor.id
                
        );
    };

}]);
