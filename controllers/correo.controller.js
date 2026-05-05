const pool = require("../db/db");


const getCorreo = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM correo ORDER BY id DESC");
    res.json(rows);
} catch (error) {
    res.status(500).json({ error: "Error al obtener correos" });
  }
};

const postCorreo = async (req,res) => {
    try {
        const { correo } = req.body;

        if (!correo) {
          return res.status(400).json({ error: 'El campo correo es requerido' });
        }

        const [result] = await pool.query(
            "INSERT INTO correo (correo) VALUES (?)",
            [correo]
        );

        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: "Error al guardar correo" });
    }
};

module.exports = {getCorreo, postCorreo};