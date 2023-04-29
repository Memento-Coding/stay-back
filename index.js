const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const usuarios = require('./v1/routes/usuario.route');



app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/v1/user', usuarios);

//Develop
app.listen(process.env.PORT || 3030,()=>{
    console.log("Server running in port " + process.env.PORT);
})
