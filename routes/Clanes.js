const router = require('express').Router();
const {
  crearClan,
  obtenerClan,
  modificarClan,
  eliminarClan,
  iniciarSesion
} = require('../controllers/usuarios')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerClan)
router.get('/:id', auth.requerido, obtenerClan);
router.post('/', crearClan)
router.post('/entrar', iniciarSesion)
router.put('/:id', auth.requerido, modificarClan)
router.delete('/:id', auth.requerido, eliminarClan)

module.exports = router;