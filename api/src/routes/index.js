const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const temperaments = require("./temperamentsRoutes")
const dogs = require("./dogsRoutes")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", dogs)
router.use("/", temperaments)

module.exports = router;
