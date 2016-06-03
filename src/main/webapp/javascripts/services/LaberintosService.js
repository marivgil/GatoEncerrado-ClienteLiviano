gatoEncerrado.service('laberintosService', ['$http', function($http) {
     this.obtenerLaberintos = function(usuarioId) {
         return $http.get('http://localhost:9000/laberintos/' + usuarioId);
 };
     this.traerLaberinto = function(usuarioId, laberintoId){
     	  var data = $http.get('http://localhost:9000/iniciarLaberinto/'+ usuarioId +'/'+ laberintoId);
        console.log(data);
        return data;

     };
 }]);