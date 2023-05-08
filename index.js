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

app.get('/chef', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefs_recipe = chefs.find(chef => chef.id === id);
    res.send(chefs_recipe);
})