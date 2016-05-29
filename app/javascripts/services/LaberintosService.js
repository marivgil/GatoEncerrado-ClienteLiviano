gatoEncerrado.service('laberintosService', ['$http', function($http) {
    this.obtenerLaberintos = function(usuarioId) {
        return $http.get('http://localhost:9000/laberintos/' + usuarioId)
            .success(function(data){
                console.log(data);
                return data;
            })
            .error(function(data){
                console.log(data)
            })
    }
}]);
