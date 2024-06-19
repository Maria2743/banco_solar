import { Router } from 'express'
import { createUsuarios, getAllUsuarios, getUsuarios, removeUsuarios, updateUsuarios } from "../controllers/usuarios.controllers.js"


const router = Router()

// / api / v1 / usuarios

router.get('/', getAllUsuarios)

router.get('/:uid', getUsuarios)

router.post('/', createUsuarios)

router.put('/:uid', updateUsuarios)

router.delete('/:uid', removeUsuarios)

export default router;