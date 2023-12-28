import express from 'express'
import cors from 'cors'
import { routes } from '../routes/usuarios.js'

class Server_res { 
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT_SERVER;
        this.routesr = routes;

        // middlewares
        this.middlewares();

        // rutas de mi app
        this.route();
    }

    middlewares(){

        // CORS
        this.app.use( cors() )

        // lectura y parseo del body
        this.app.use( express.json() )

        // directorio publico
        this.app.use(express.static('public'))
    }

    route(){
        this.app.use('/api/users', this.routesr)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ', this.port)
        })
    }
}

export default Server_res;