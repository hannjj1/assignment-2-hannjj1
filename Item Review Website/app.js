const express = require('express')
const fetch = require('node-fetch')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.use(expressLayouts)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/login', (req, res) => {
    res.status(200).render('login')
})

app.post('/login', (req, res) => {
    res.status(200).redirect('/login')
})

// Listening to port 3000
app.listen(port, _ => {
    console.log(`Listening on port ${port}`)
})

module.exports = app 