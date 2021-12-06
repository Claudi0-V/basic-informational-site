const express = require('express')
const app = express()

app.listen(3000)

const root = { root: __dirname }
app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', root);
})

app.get('/contact', (req, res) => {
    res.sendFile('./pages/contact-me.html', root);
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', root);
})


app.use((req, res) => {
    res.status(404).sendFile('./pages/404.html', root);
})

