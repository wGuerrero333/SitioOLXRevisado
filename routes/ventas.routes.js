const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const { 
  getVentas, 
  getVenta,
  postVentas, 
  updateVenta, 
  deleteVenta 
} = require("../controllers/ventas.controller");

router.get("/", getVentas);

router.get("/:id", getVenta);
// hay que agregar el middleware de multer para manejar la subida de archivos en PUT Y POST
router.post("/", upload.single('imagen'), postVentas);
router.put("/:id", upload.single('imagen'), updateVenta);
router.delete("/:id", deleteVenta);

module.exports = router;
