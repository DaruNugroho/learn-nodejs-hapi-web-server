const routes = [
    {
        method: 'GET',
        path: '/',
        handler:(request, h) => {
            return 'Home Page';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler:(request, h) => {
            return 'About Page';
        }
    },
    {
        method: '*',
        path: '/',
        handler:(request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        }
    },
    {
        method: '*',
        path: '/about',
        handler:(request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut!';
        }
    },
    {
        method: 'GET',
        path: '/users/{username}', // {username} path parameter
        handler:(request, h) => {
            const { username } = request.params;
            return `Hello, ${username}`;
        }
    },
    {
        method: 'GET',
        path: '/guests/{username?}', // {username} optional path parameter
        handler:(request, h) => {
            const { username = 'guest'} = request.params;
            return `Hello, ${username}`;
        }
    },
];


module.exports = routes;