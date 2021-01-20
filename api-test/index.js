const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3080


app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})


app.get('/', (req, res) => {
    res.send('Hello Rect Project')
    res.end()
})

app.get('/api', (req, res) => {
    res.end(`This is API from Server side`)
})

app.listen(PORT, d => console.log(`Server is running... on port ${PORT}`))