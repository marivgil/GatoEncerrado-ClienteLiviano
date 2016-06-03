Entrega 2: Cliente web

Para instalar proyecto!
  -Bajarse node
  -Bajarse npm
  -Hacer npm install para instalar dependencias.

Para agregar dependencias nuevas!
  -npm install <nombre de la dependencia> --save


Para estructurar el proyecto vamos a usar la guia de angular.

https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

- Referencia para tener a manopla:

Create folders named for the feature they represent. When a folder grows to contain more than 7 files, start to consider creating a folder for them. Your threshold may be different, so adjust as needed.

Why?: A developer can locate the code, identify what each file represents at a glance, the structure is flat as can be, and there is no repetitive nor redundant names.

Why?: The LIFT guidelines are all covered.

Why?: Helps reduce the app from becoming cluttered through organizing the content and keeping them aligned with the LIFT guidelines.

Why?: When there are a lot of files (10+) locating them is easier with a consistent folder structures and more difficult in flat structures.

app/
    app.module.js
    app.config.js
    components/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    layout/
        shell.html
        shell.controller.js
        topnav.html
        topnav.controller.js
    people/
        attendees.html
        attendees.controller.js
        people.routes.js
        speakers.html
        speakers.controller.js
        speaker-detail.html
        speaker-detail.controller.js
    services/
        data.service.js
        localstorage.service.js
        logger.service.js
        spinner.service.js
    sessions/
        sessions.html
        sessions.controller.js
        sessions.routes.js
        session-detail.html
        session-detail.controller.js
