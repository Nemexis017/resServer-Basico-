import 'dotenv/config'
import Server_res from './models/express.js'

const main = ()=>{
    const server = new Server_res(); 

    server.listen();
}

main();