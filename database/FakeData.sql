insert into ROL (NOMBRE_ROL) values ('usuario');

insert into EVENTO (NOMBRE, DESCRIPCION, FECHA_HORA) values ('Descuento de bebidas', 'Descuento en todas las bebidas del bar en un 30%', '8/2/2023 14:00:00.00');
insert into EVENTO (NOMBRE, DESCRIPCION, FECHA_HORA) values ('Charla de mintic', 'Charla sobre vacantes del mintic ', '7/9/2022 08:00:00.00');

insert into USUARIO (CORREO_ELECTRONICO, CONTRASENIA, NOMBRE_USUARIO, ROL_ID) values ('hrosenkrantz0@patch.com', 'BTm4tlW6abDW', 'kfaldo0', 1);
insert into USUARIO (CORREO_ELECTRONICO, CONTRASENIA, NOMBRE_USUARIO, ROL_ID) values ('asedger1@wisc.edu', 'S6H9mElxi', 'irafter1', 1);

insert into SITIO_TURISTICO (NOMBRE, DESCRIPCION, UBICACION, FOTO) values ('Hotel Juan Maria', 'Este hotel tranquilo, ubicado en una calle arbolada, se encuentra a 3 km de los senderos panorámicos del parque Carlos Sarmiento Lora y a 4 km del aeropuerto Heriberto Gil Martínez.', 'Cra. 28 #2710, Tuluá, Valle del Cauca', 'image.png');

insert into CALIFICACION (CANTIDAD_ESTRELLAS, FECHA_PUBLICACION, USUARIO_ID, SITIO_TURISTICO_ID) values ('3.5', '4/2/2023 8:32:43.00', 1, 1);
insert into CALIFICACION (CANTIDAD_ESTRELLAS, FECHA_PUBLICACION, USUARIO_ID, SITIO_TURISTICO_ID) values ('5.0', '2/6/2023 16:20:32.00', 2, 1);

insert into COMENTARIO (DESCRIPCION, FECHA_PUBLICACION, USUARIO_ID, SITIO_TURISTICO_ID) values ('Muy buen lugar para quedarse', '2/6/2023 16:22:32.00', 2, 1);
insert into COMENTARIO (DESCRIPCION, FECHA_PUBLICACION, USUARIO_ID, SITIO_TURISTICO_ID) values ('Todo muy bien pero el internet deben mejorarlo', '4/2/2023 8:40:00.00', 1, 1);

insert into SITIO_TURISTICO_X_EVENTO (SITIO_TURISTICO_ID, EVENTO_ID) values (1, 1);
insert into SITIO_TURISTICO_X_EVENTO (SITIO_TURISTICO_ID, EVENTO_ID) values (1, 2);