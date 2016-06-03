
app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('inicio', {
      url: "/",
      templateUrl: "partials/seleccionaLaberinto.html",
    })
/*
    .state('editarTarea', {
      url: "/tarea/:id",
      templateUrl: "partials/editar_tarea.html",
      controller: "EditarTareaController as editarCtrl"
    })
*/
});