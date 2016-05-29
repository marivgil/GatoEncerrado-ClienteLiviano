app.factory('LaberintosFactory', function($resource) {
    return $resource('/laberintos/:idUser', {'idUser', '@idUser'}{
    	'query': { method: 'GET', isArray: true},
        'update': { method: 'PUT' },
        'save': { method: 'POST' },
    });
});

// lab.factory('IniciarLaberintoFactory', function($resource) {
//     return $resource('/iniciarLaberinto/:idUser/:idLab', {'idUser': '@idUser', 'idLab': '@idLab'} {
//     	'query': { method: 'GET', isArray: true},
//         'update': { method: 'PUT' },
//         'save': { method: 'POST' },
//     });
// });

// lab.factory('RealizarAccionHabitacionFactory', function($resource) {
//     return $resource('/realizarAccion/:idUser/:idHab/:idAccion', {'idUser': '@idUser', 'idHab': '@idHab', 'idAccion': '@idAccion'} {
//     	'query': { method: 'GET', isArray: true},
//         'update': { method: 'PUT' },
//         'save': { method: 'POST' },
//         'remove': { method:'DELETE' }
//     });
// });

// Preguntar
// app.factory('Autenticar', function($resource) {
//     return $resource('/login/idUser', {'idUser': '@idUser'}, {
//     	'autenticar': { method: 'POST', isArray: true}
//     });
// });