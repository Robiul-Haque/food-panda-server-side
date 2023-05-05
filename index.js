const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('express js is running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/chefs', (req, res) => {
    res.send(chefs)
    // http://localhost:5000/chefs
})