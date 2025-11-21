const express = require("express");
const router = express.Router();

const {
  getSuscripciones,
  getSuscripcion,
  postSuscripcion,
  updateSuscripcion,
  deleteSuscripcion
} = require("../controllers/suscripciones.controller");

router.get("/", getSuscripciones);
router.get("/:id", getSuscripcion);
router.post("/", postSuscripcion);
router.put("/:id", updateSuscripcion);
router.delete("/:id", deleteSuscripcion);

module.exports = router;
