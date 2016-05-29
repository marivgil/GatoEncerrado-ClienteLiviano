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
            templateUrl: 'views/holis',
            controller: 'LaberintosController',
            resolve: {
                resolveResponse: function(laberintosService){
                    return laberintosService.obtenerLaberintos(1);
                }
            }
        })
});
