lab.factory('Laberintos', function($resource) {
    return $resource('/laberintos/:idUser', {'idUser', '@idUser'}{
    	'query': { method: 'GET', isArray: true},
        'update': { method: 'PUT' },
        'save': { method: 'POST' },
        'remove': { method:'DELETE' }
    });
});

lab.factory('IniciarLaberinto', function($resource) {
    return $resource('/iniciarLaberinto/:idUser/:idLab', {'idUser': '@idUser', 'idLab': '@idLab'} {
    	'query': { method: 'GET', isArray: true},
        'update': { method: 'PUT' },
        'save': { method: 'POST' },
        'remove': { method:'DELETE' }
    });
});

lab.factory('RealizarAccionHabitacion', function($resource) {
    return $resource('/realizarAccion/:idUser/:idHab/:idAccion', {'idUser': '@idUser', 'idHab': '@idHab', 'idAccion': '@idAccion'} {
    	'query': { method: 'GET', isArray: true},
        'update': { method: 'PUT' },
        'save': { method: 'POST' },
        'remove': { method:'DELETE' }
    });
});

// Preguntar
app.factory('Autenticar', function($resource) {
    return $resource('/login/idUser', {'idUser': '@idUser'}, {
    	'autenticar': { method: 'POST', isArray: true}
    });
});

	
// app.factory('Libros', function($resource) {
//     return $resource('/libros/:id', {'id': '@id'}, {
//     	'query': { method: 'GET', isArray: true},
//         'update': { method: 'PUT' },
//         'save': { method: 'POST' },
//         'remove': { method:'DELETE' }
//     });
// });

// app.factory('LibrosNoLeidos', function($resource) {
//     return $resource('/librosNoLeidos/:usuario', 
//     		{'usuario': '@usuario'}, {
//     	'porAutor': { method: 'GET', isArray: true, 
//     		params:{'autor': '@autor'}}
//     });
// });


