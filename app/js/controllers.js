// Se podrian crear 3 controllers con las factorys correspondientes distintos para cada parte de la 
// vista compuesta que queremos armar dado que cada vista solo admite un controller creo
// 'use strict';
// app.controller("laberintosController", function($scope) { 
//     $scope.nombre= "Mario";
//     $scope.apellidos= "Flores";
// });
// app.controller("laberintosController", function (LaberintosFactory){    
app.controller("laberintosController", function ($scope){    
  
    $scope.nombre = "mariu";
    $scope.userTest = {
        name: "jose"
    }



});
// 'use strict';
//     var self = this;
//     self.estaDesplegado = false;
//     self.enJuego = false;
//     self.laberintoSeleccionado = null;
//     self.laberintosServer = [];
//     self.userTest = {
//         name: "jose"
//     }
//     self.laberintos = [
//         {
//         nombreLaberinto:"Casa de agus",
//         idLaberinto:1,
//         pathImagenLaberinto:"app/images/una-habitacion.jpg",
//         descripcionLaberinto:"Es desordenado.",
//         habitaciones:[],
//         inventarioDelJugador:[]
//         },

//         {
//         nombreLaberinto:"Casa de mariu",
//         idLaberinto:2,
//         pathImagenLaberinto:"app/images/otra-habitacion.jpg",
//         descripcionLaberinto:"Tiene un gato",
//         habitaciones:[],
//         inventarioDelJugador:[]
//         }
//                         ];
//     self.probarObtenerLaberintos = function(idUSer){
//         self.laberintosServer
//     };

//     self.obtenerLaberintos = function(idUSer){
//         LaberintosFactory.query(idUser,function(data){
//             self.laberintos = data;
//         }, errorHandler);
//     };

//     self.seleccionarLaberinto = function(laberinto){
//         if(self.estaDesplegado){
//             self.laberintoSeleccionado = null;
//         }
//         else{
//             self.laberintoSeleccionado = laberinto;
//         }
//     };

// });
