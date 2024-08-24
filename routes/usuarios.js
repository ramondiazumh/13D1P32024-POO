const { Router } = require('express');
const UsuarioController = require('../controllers/usuarios');

const router = Router();

router.post('/get', UsuarioController.getUsuario);
router.post('/getall', UsuarioController.getAllUsuarios);
router.post('/save', UsuarioController.saveUsuario);
router.post('/delete', UsuarioController.deleteUsuario);

module.exports = router;