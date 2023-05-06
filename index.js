const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection')
require('dotenv').config();
const usuarios = require('./v1/routes/usuario.route');
const Rol = require('./database/models/Rol');
const sitioTuristico = require('./v1/routes/sitioTuristico.route');
const evento = require('./v1/routes/evento.route');
const comentario = require('./v1/routes/comentario.route');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./v1/routes/swagger.js');
 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/v1/user', usuarios);
app.use('/v1/sitio-turistico', sitioTuristico);
app.use('/v1/evento', evento);
app.use('/v1/comentario', comentario);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 
async function main() {
    try {
        await db.authenticate();
        console.log('Database online');    
        app.listen(process.env.PORT || 3030,()=>{
                console.log("Server running in port " + process.env.PORT);
            })
    } catch (error) {
        throw new Error(error);    
    }
}
 
main();
