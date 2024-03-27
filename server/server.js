import express from 'express'
import path from "path"
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = 5000

const app = express()

app.use('/', express.static(path.join(__dirname, '../', 'client', 'build')))

app.get('/about', (req, res) => {
    return res.sendFile(path.join(__dirname, '../', 'client', 'build', 'about.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})