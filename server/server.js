import express from 'express'

const PORT = 5000

const app = express()

app.get('/', (req, res) => {
    return res.send('Здорова други!!!!!! Это халявный хостинг Render!!!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})