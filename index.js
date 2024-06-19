import 'dotenv/config'
import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import transferenciasRoutes from './routes/transferencias.routes.js'


const app = express()
const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/usuarios', usuariosRoutes)
app.use('/api/v1/transferencias', transferenciasRoutes)

app.get('/', (req, res) => {
    res.send('Hello Word')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor conectado en: http://localhost:${PORT}`)
})