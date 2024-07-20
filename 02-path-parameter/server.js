const Hapi = require('@hapi/hapi');
const routes = require('../path-parameter/routes');

const init = async () => {
    const server = Hapi.server({
        port: 5001,
        host: 'localhost'
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();