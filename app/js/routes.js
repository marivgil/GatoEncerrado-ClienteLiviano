'use strict'
lab.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('pruebaUno', {
      url: "/",
      templateUrl: "app/partials/prueba_uno.html"
      //controller: "AgregarTareaController as tareasCtrl"
    })

    // .state('prueba2', {
    //   //url: "/tarea/:id",
    //   templateUrl: "partials/prueba2.html",
    //   //controller: "EditarTareaController as editarCtrl"
    // })

});