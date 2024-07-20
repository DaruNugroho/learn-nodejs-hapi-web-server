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
];


module.exports = routes;