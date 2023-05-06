const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Stay',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8080/v1/'
      }
    ],
    components: {
      schemas: {
        Evento: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del evento'
            },
            nombre: {
              type: 'string',
              description: 'Nombre del evento'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción del evento'
            },
            fecha_hora: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora del evento'
            }
          }
        },
        Comentario: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del comentario'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción del comentario'
            },
            fecha_publicacion: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de publicación del comentario'
            },
            usuario_id: {
              type: 'integer',
              description: 'ID del usuario que hizo el comentario'
            },
            sitio_turistico_id: {
              type: 'integer',
              description: 'ID del sitio turístico al que pertenece el comentario'
            }
          }
        },
        Usuario: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del usuario'
            },
            correo_electronico: {
              type: 'string',
              description: 'Correo electrónico del usuario'
            },
            contrasenia: {
              type: 'string',
              description: 'Contraseña del usuario'
            },
            nombre_usuario: {
              type: 'string',
              description: 'Nombre de usuario'
            },
            rol_id: {
              type: 'integer',
              description: 'ID del rol del usuario'
            }
          }
        },
        SitioTuristico: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID del sitio turístico'
            },
            nombre: {
              type: 'string',
              description: 'Nombre del sitio turístico'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción del sitio turístico'
            },
            ubicacion: {
              type: 'string',
              description: 'Ubicación del sitio turístico'
            },
            foto: {
              type: 'string',
              description: 'URL de la foto del sitio turístico'
            }
          }
        },Rol: {
          type: 'object',
          properties: {
            rol_id: {
              type: 'integer',
              description: 'ID del rol'
            },
            nombre_rol: {
              type: 'string',
              description: 'Nombre del rol'
            }
          }
        }
      }
    }
  },
  apis: ['v1/routes/*.route.js',],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;