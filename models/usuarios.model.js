import { pool } from "../database/connection.js"

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM USUARIOS')
    return rows
}

const findOneById = async (uid) => {
    const query = {
        text: "SELECT * FROM USUARIOS WHERE uid = $1",
        values: [uid]
    }
    const { rows } = await pool.query(query)
    return rows
}

const create = async (nombre, balance) => {
    const query = {
        text: "INSERT INTO USUARIOS (nombre, balance) VALUES ($1, $2) RETURNING *",
        values: [nombre, balance]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}


const remove = async (uid) => {
    const query = {
        text: "DELETE FROM USUARIOS WHERE UID = $1 RETURNING",
        values: [uid]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (uid, nombre, balance) => {
    const query = {
        text: `UPDATE USUARIOS SET nombre = $1, balance = $2 WHERE uid = $3 RETURNING*`,
        values: [nombre, balance, uid]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}


export const Usuarios = {
    findAll,
    findOneById,
    create,
    remove,
    update

}