const express = require("express");
const router = express.Router();

//const _controlador = require("../controllers/Registro_integrantes_espacio");
/**
 * TODO: add custom controller 
 */

/**
 * Obtener todas los integrantes
 */
router.get("/ejemplo",async (req, res) => {
  await res.send({message:"TEST"})
});



module.exports = router;