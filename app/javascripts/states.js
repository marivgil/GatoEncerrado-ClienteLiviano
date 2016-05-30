gatoEncerrado.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/laberintos');

    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'views/contenedor',
            controller: 'AppController'
        })
        .state('app.laberintos', {
            url: '/laberintos',
            templateUrl: 'views/laberintos',
            controller: 'LaberintosController',
            resolve: {
                resolveResponse: function(laberintosService){
                    return laberintosService.obtenerLaberintos(1);
                }
            }
        })
        .state('app.laberintos.laberinto', {
            url: '/laberinto/:id',
            templateUrl: 'views/laberinto',
            controller: 'LaberintoController',
            resolve: {
                resolveResponse: function($stateParams, laberintosService) {
                    return laberintosService.traerLaberinto(1, $stateParams.id);
                }
            }
        })
});
