gatoEncerrado.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider


    .state('login', {
      url: "",
      templateUrl: "partials/login.html",
      controller: "LoginController"
    })

    // .state('homeIzq', {
    //   url: "/homeIzq",
    //   templateUrl: "partials/panelIzq.html",
    //   controller: "GatoController"
  
    .state('homeDer', {
      url: "/homeDer",
      templateUrl: "partials/panelDer.html",
      controller: "GatoController"
    })

    .state('habitacion', {
      url: "/habitacion",
      templateUrl: "partials/holis.html",
      controller: "GatoController"
    })

    .state('prueba', {
      url: "/prueba",
      templateUrl: "views/holis.html",
      controller: "GatoController"
    })

});   