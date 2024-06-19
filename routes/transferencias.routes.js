import { Router } from 'express';
import { createTransferencias, getTransferencias } from "../controllers/transferencias.controllers.js"

const router = Router()


// /api/v1/transferencias

router.post('/', createTransferencias)

router.get('/', getTransferencias)

export default router;