import { Usuarios } from "../models/usuarios.model.js"

export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll()
        res.json(usuarios)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor' })

    }

}

export const getUsuarios = async (req, res) => {
    try {
        const { uid } = req.params
        const Usuarios = await Usuarios.finOneById(uid)
        res.status(201).json(Usuarios)
    } catch {
        console.log(error)
        res.status(500).json({ error: "Error al intentar buscar al usuario" })
    }
}

export const createUsuarios = async (req, res) => {
    try {
        const { nombre, balance } = req.body;
        if (!nombre || balance === undefined) {
            return res.status(400).json({ ok: false, message: "Nombre y balance son requeridos" });
        }
        const newUsuarios = await Usuarios.create({ nombre, balance });
        res.status(201).json({ newUsuarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al crear usuario" });
    }

}

export const updateUsuarios = async (req, res) => {
    try {
        const { uid } = req.params;
        const { nombre, balance } = req.body;
        if (!nombre || balance === undefined) {
            return res.status(400).json({ ok: false, msg: "Nombre y balance son requeridos" });
        }
        const usuarios = await Usuarios.updateSaldo(uid, { nombre, balance });
        if (!usuarios) {
            return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });
        }
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, msg: "Error al actualizar el usuario" })
    }
}

export const removeUsuarios = async (req, res) => {
    try {
        const { uid } = req.params;
        const usuarios = await Usuarios.remove(uid);
        if (!usuarios) {
            return res.status(404).json({ ok: false, msg: "Usuario no encontrado" });
        }
        res.status(200).json({ ok: true, msg: `Usuario: ${usuarios} eliminado` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al eliminar usuario" });
    }
}

