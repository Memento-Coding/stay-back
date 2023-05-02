const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection')
require('dotenv').config();
const usuarios = require('./v1/routes/usuario.route');
const Rol = require('./database/models/Rol');

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/v1/user', usuarios);

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