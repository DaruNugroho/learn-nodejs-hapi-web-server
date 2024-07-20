/**
 * Test kirim data json dengan curl
 * 
 * curl --header "Content-Type: application/json"   --request POST   --data '{"username":"Daru Nugroho","password" : "12345"}'   http://localhost:5001/login

 */


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
    {
        method: 'POST',
        path: '/login',
        handler:(request, h) => {
            
            // Tangkap json yang dikim oleh client
            const { username, password } = request.payload;
            
            if(password === '12345') {
                return `${username}, berhasil login`;
            } 
           
            return 'Password salah!';
            
        }
    },
];


module.exports = routes;