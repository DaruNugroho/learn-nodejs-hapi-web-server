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
        method: 'GET',
        path: '/users/{username}',
        handler:(request, h) => {
            const { username } = request.params;
            return `Hello, ${username}`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler:(request, h) => {
            const { lang} = request.query;
            const { name = 'guest'} = request.params;

            if(lang === 'en') {
                return `Hello, ${name}`;
            } 
            
            if(lang === 'id') {
                return `Hay.., ${name}`;
            }  
                
            return `whatsapp..,`;
            
        }
    },
];


module.exports = routes;