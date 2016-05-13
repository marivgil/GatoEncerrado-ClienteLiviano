Entrega 2: Cliente web + Servidor REST
Nuestro objetivo es tener una página web que permita resolver laberintos
Servidor

La tecnología que usaremos para exponer los servicios es XTRest.

Deben de implementarse los servicios que se mencionan a continuación (siendo opcional el de login) y debemos estar en control de los datos que se envían desde nuestra API, es decir que no enviamos datos de más.

NOTA: Consideramos que un dato está de más cuando no se muestra en la pantalla ni es usado como input de otro servicio

Laberintos:

    Invocación: GET

    Parámetros: id del Usuario (Si no hay pantalla de login y no cambia el usuario, enviar un Id de usuario conocido) 

    Respuesta JSON con la lista de Laberintos:

        Cada Laberinto debe tener nombre, id del laberinto, path de la imagen.


Iniciar Laberinto:

    Invocación: GET

    Parámetros: Id del Usuario, Id del Laberinto

    Respuesta JSON con los datos del Laberinto:

        Id del Laberinto (opcional)

        lista de habitaciones

        Cada habitación debe tener

            id, nombre, lista de acciones, el path a la imagen.

            Informar de alguna manera, cuál es la habitación inicial y cuál la final.

            De cada acción necesitamos el Id y el nombre

        Todos los elementos del inventario del Jugador.
            cada elemento debe tener, id, nombre y descripción.


Realizar Acción Habitación:

    Invocación: GET

    Parámetros: id de la habitación, id de la acción

    Respuesta Json

        Resultado de ejecutar la acción:

            Agarrar un elemento

            Ir a otra habitación

            Habilitar otra acción

            Ganar !!!

            Nada


Modificaciones posibles:

    Mantener el inventario desde el FrontEnd. Esto implicaría que, se debe quitar el elemento usado en una acción del inventario y se debe agregar un elemento agarrado en la habitación sin traer todo el inventario.
