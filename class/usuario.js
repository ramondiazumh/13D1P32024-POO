const pool = require('../database/conexion');

class Usuario {
    idusuario = null;
    name = '';
    email = '';
    numero = 0;

    constructor(idusuario, name, email, numero){
        this.idusuario = idusuario;
        this.name = name;
        this.email = email;
        this.numero = numero;
    }

    async get(){
        const sql = `SELECT * from "admin".usuarios where "name" = '${this.name}'`;
        return await pool.query(sql);
    }

    async save(){
        let sql = '';
        if (this.idusuario > 0) {
            sql = `UPDATE "admin".usuarios SET "name"='${this.name}', "email"= '${this.email}, "numero"= '${this.numero}' WHERE idusuario = ${this.idusuario};`
        } else {
            sql = `INSERT INTO "admin".usuarios ("name", email, numero) VALUES('${this.name}', '${this.email}', ${this.numero});`;
        }
        return await pool.query(sql);
    }

    async delete(){
        const sql = `DELETE FROM "admin".usuarios WHERE idusuario = ${this.idusuario};`;
        return await pool.query(sql);
    }
}

module.exports = Usuario;