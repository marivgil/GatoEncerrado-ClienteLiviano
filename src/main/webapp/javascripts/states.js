gatoEncerrado.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider


    .state('login', {
      url: "",
      templateUrl: "partials/login.html",
      controller: "LoginController"
    })
  
    .state('homeDer', {
      url: "/homeDer",
      templateUrl: "partials/panelDer.html",
      controller: "GatoController"
    })

    .state('habitacion', {
      url: "/habitacion",
      templateUrl: "partials/habitacion.html",
      controller: "GatoController"
    })

    .state('laberintoSeleccionado', {
      url: "/laberintoSeleccionado/:id",
      templateUrl: "partials/laberintoSeleccionado.html",
      controller: "GatoController"
    })

});   