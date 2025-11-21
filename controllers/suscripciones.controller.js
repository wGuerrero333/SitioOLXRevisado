const pool = require('../db/db');

const getSuscripciones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM suscripciones ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener suscripciones" });
  }
};

const getSuscripcion = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM suscripciones WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


const postSuscripcion = async (req, res) => {
  try {
    const { nombre, email, mensaje, role } = req.body;

    const rolesValidos = ["administrador", "miembro", "usuario"];
    const rolFinal = rolesValidos.includes(role) ? role : "usuario";

    const [result] = await pool.query(
      "INSERT INTO suscripciones (nombre, email, mensaje, role) VALUES (?, ?, ?, ?)",
      [nombre, email, mensaje, rolFinal]
    );

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Error al guardar suscripción" });
  }
};

const updateSuscripcion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, mensaje, role } = req.body;

    await pool.query(
      "UPDATE suscripciones SET nombre=?, email=?, mensaje=?, role=? WHERE id=?",
      [nombre, email, mensaje, role, id]
    );

    res.json({ updated: true });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar suscripción" });
  }
};

const deleteSuscripcion = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM suscripciones WHERE id=?", [id]);
    res.json({ deleted: true });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar suscripción" });
  }
};

module.exports = {
  getSuscripciones,
  getSuscripcion,
  postSuscripcion,
  updateSuscripcion,
  deleteSuscripcion
};
