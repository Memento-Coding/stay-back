const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection')
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const usuarios = require('./v1/routes/usuario.route');
const roles = require('./v1/routes/rol.route')
const auth = require('./v1/routes/auth.route') 

app.use('/v1/user', usuarios);
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