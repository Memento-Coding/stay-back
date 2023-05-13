const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const db = require ('./database/connection')
require('dotenv').config();
const usuarios = require('./v1/routes/usuario.route');
const swaggerUi = require('swagger-ui-express');

const roles = require('./v1/routes/rol.route')
const auth = require('./v1/routes/auth.route')
const cargarArchivo = require('./v1/routes/imagen.route')
const comentario = require('./v1/routes/comentario.route');
const sitioTuristico = require('./v1/routes/sitioTuristico.route');
const evento = require('./v1/routes/evento.route');
const calificacion = require('./v1/routes/calificacion.route');
const sitioTuristico_x_evento = require('./v1/routes/sitio_x_evento.route')
const swaggerDocument = require('./v1/routes/swagger.js');

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp/',
    createParentPath: true
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/v1/user', usuarios);
app.use('/v1/sitio-turistico', sitioTuristico);
app.use('/v1/evento', evento);
app.use('/v1/comentario', comentario);
app.use('/v1/calificacion', calificacion);
app.use('/v1/sitioTuristicoXevento', sitioTuristico_x_evento);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

 
app.use('/v1/cargarArchivo', cargarArchivo);
app.use('/v1/rol', roles)
app.use('/v1/login', auth)


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
