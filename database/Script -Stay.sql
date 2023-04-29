CREATE TABLE ROL (
  ROL_ID SERIAL PRIMARY KEY NOT NULL,
  NOMBRE_ROL VARCHAR(64) NOT NULL
);

CREATE TABLE EVENTO (
  EVENTO_ID  SERIAL PRIMARY KEY NOT NULL,
  NOMBRE VARCHAR(128) NOT NULL,
  DESCRIPCION VARCHAR(256),
  FECHA_HORA TIMESTAMP NOT NULL
);

CREATE TABLE USUARIO (
  USUARIO_ID SERIAL PRIMARY KEY NOT NULL,
  CORREO_ELECTRONICO VARCHAR(256) NOT NULL UNIQUE,
  CONTRASENIA VARCHAR(20) NOT NULL,
  NOMBRE_USUARIO VARCHAR(20) NOT NULL UNIQUE,
  ROL_ID INT NOT NULL,
  FOREIGN KEY (ROL_ID) REFERENCES ROL(ROL_ID)
);

CREATE TABLE SITIO_TURISTICO (
  SITIO_TURISTICO_ID  SERIAL PRIMARY KEY NOT NULL,
  NOMBRE VARCHAR(128) NOT NULL,
  DESCRIPCION VARCHAR(256) NOT NULL,
  UBICACION VARCHAR(256) NOT NULL,
  FOTO VARCHAR(256) NOT NULL
);

CREATE TABLE CALIFICACION (
  CALIFICACION_ID SERIAL PRIMARY KEY NOT NULL,
  CANTIDAD_ESTRELLAS DECIMAL (2,1) NOT NULL,
  FECHA_PUBLICACION TIMESTAMP NOT NULL,
  USUARIO_ID INT NOT NULL,
  SITIO_TURISTICO_ID INT NOT NULL,
  FOREIGN KEY (USUARIO_ID) REFERENCES USUARIO (USUARIO_ID),
  FOREIGN KEY (SITIO_TURISTICO_ID) REFERENCES SITIO_TURISTICO (SITIO_TURISTICO_ID)
);


CREATE TABLE COMENTARIO (
  COMENTARIO_ID SERIAL PRIMARY KEY NOT NULL,
  DESCRIPCION VARCHAR(256) NOT NULL,
  FECHA_PUBLICACION TIMESTAMP NOT NULL,
  USUARIO_ID INT NOT NULL,
  SITIO_TURISTICO_ID INT NOT NULL,
  FOREIGN KEY (USUARIO_ID) REFERENCES USUARIO (USUARIO_ID),
  FOREIGN KEY (SITIO_TURISTICO_ID) REFERENCES SITIO_TURISTICO (SITIO_TURISTICO_ID)
);


CREATE TABLE SITIO_TURISTICO_X_EVENTO (
  SITIO_TURISTICO_ID INT NOT NULL,
  EVENTO_ID INT NOT NULL,
  FOREIGN KEY (SITIO_TURISTICO_ID) REFERENCES SITIO_TURISTICO (SITIO_TURISTICO_ID),
  FOREIGN KEY (EVENTO_ID) REFERENCES EVENTO (EVENTO_ID)
);
