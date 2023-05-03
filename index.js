const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json')

app.use(cors())

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