const express = require('express')
const app = express();
const PORT = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.send(`Hello World! ${PORT}`)
})

app.get('/dburl', (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`)
})