const express = require('express')
const app = express()
var server = require('http').createServer(app)
app.use(express.json())
require('./src/db/mongoose')
const newsRouter = require('./src/routes/news')
app.use(newsRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
