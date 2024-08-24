const pool = require('../database/conexion');
const Usuario = require('../class/usuario');

async function getAllUsuarios(req, res){
    try {
        const respuesta = await pool.query(`SELECT * from "admin".usuarios`);
        res.json(respuesta.rows);
    } catch (error) {
        console.log('ERROR -> ', error);
        res.status(500).json({"message":"Error en el servidor", error})
    }
}

async function getUsuario(req, res){
    try {
        const name = req.body ? req.body['name'] : '';
        const usuario = new Usuario(null, name, null);
        respuesta = await usuario.get();
        res.json(respuesta.rows)
    } catch (error) {
        console.log('ERROR -> ', error);
        res.status(500).json({"message":"Error en el servidor", error})
    }
    
}

async function saveUsuario(req, res){
    try {
        const { idUsuario, name, email, numero } = req.body;
        if (name && email && numero) {
            const usuario = new Usuario(idUsuario, name, email, numero);
            respuesta = await usuario.save();
            res.json(respuesta.rowCount)
        } else {
            res.json({"message":"Informacion incompleta"})
        }
    } catch (error) {
        console.log('ERROR -> ', error);
        res.status(500).json({"message":"Error en el servidor", error})
    }
}

async function deleteUsuario(req, res) {
    try {
        const { idUsuario } = req.body;
        if (idUsuario > 0){
            const usuario = new Usuario(idUsuario);
            respuesta = await usuario.delete();
            res.json(respuesta.rowCount)
        } else {
            res.json({"message":"Id de usuario no valido"})
        }
    } catch (error){
        console.log("ERROR -> ", error)
        res.status(500).json({"message":"Error en el servidor", error})
    }
}

module.exports = {
    getAllUsuarios,
    getUsuario,
    saveUsuario,
    deleteUsuario
}