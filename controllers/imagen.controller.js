const usuarioServices = require("../services/usuario.service");
const sitioTuristicoService = require("../services/sitioTuristico.service");

const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const actualizarImagenCloudinary = async (req, res) => {

    try {
        
        const { id, coleccion } = req.params;
      
          let modelo;
      
          switch ( coleccion ) {
              case 'user':
                  modelo = await usuarioServices.validacionExisteUsuario(id);
                  if ( !modelo ) {
                      return res.status(400).json({
                          msg: `No existe un usuario con el id ${ id }`
                      });
                  }
              
              break;
      
              case 'sitio-turistico':
                  modelo = await sitioTuristicoService.validacionExisteSitioTuristico(id);
                  if ( !modelo ) {
                      return res.status(400).json({
                          msg: `No existe un sitio turistico con el id ${ id }`
                      });
                  }
              
              break;
          
              default:
                  return res.status(500).json({ msg: 'Se me olvidó validar esto'});
          }
      
      
          // Limpiar imágenes previas
          if ( modelo.foto ) {
              const nombreArr = modelo.foto.split('/');
              const nombre    = nombreArr[ nombreArr.length - 1 ];
              const [ public_id ] = nombre.split('.');
              cloudinary.uploader.destroy( public_id );
          }
      
      
          const { tempFilePath } = req.files.archivo
          const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
          modelo.foto = secure_url;
      
          await modelo.save();
      
      
          res.json( modelo );
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
  actualizarImagenCloudinary
};
