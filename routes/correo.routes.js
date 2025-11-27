const express = require("express");
const router = express.Router();


const {getCorreo, postCorreo} = require ("../controllers/correo.controller")


router.get("/", getCorreo);
router.post("/", postCorreo);

module.exports = router;