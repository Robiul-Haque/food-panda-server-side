const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('express is running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/chef', (req, res) => {
    res.send(chef);
    // http://localhost:5000/chef
})