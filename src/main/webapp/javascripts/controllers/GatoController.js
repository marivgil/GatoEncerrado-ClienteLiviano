gatoEncerrado.controller("GatoController", function ($scope, laberintosService, $state) {
    
    var self = this;
    self.user = {
        name : "pepe"
    };
    
    self.Jugador= {id:1};

    laberintosService.obtenerLaberintos(self.Jugador.id)
        .success(function(data){
                self.laberintos = data;
                console.log (data);
        })
        .error(function(error) {
            console.log(error);
        });

    $scope.cambiarDePantalla = function() {
        $state.go("segundoPanel");
    };

    $scope.cambiarALaberintoSeleccionado = function() {
        $state.go("laberintoSeleccionado");
    }

    $scope.jugarEnHabitacion = function() {
        $state.go("habitacion");
    }

	// self.laberintos = [
 //        {
 //        nombreLaberinto:"Casa de agus",
 //        idLaberinto:1,
 //        pathImagenLaberinto:"images/una-habitacion.jpg",
 //        descripcionLaberinto:"Es desordenado.",
 //        habitaciones:[],
 //        inventarioDelJugador:[]
 //        },

 //        {
 //        nombreLaberinto:"Casa de mariu",
 //        idLaberinto:2,
 //        pathImagenLaberinto:"images/otra-habitacion.jpg",
 //        descripcionLaberinto:"Tiene un gato",
 //        habitaciones:[],
 //        inventarioDelJugador:[]
 //        }
 //    ];

});
