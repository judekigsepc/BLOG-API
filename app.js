const express = require('express')
const app = express()

const cors = require('cors')

const mongoose = require('mongoose')

const addRouter = require('./routes/add.route.js')
const getRouter = require('./routes/get.route.js')
const updateRouter = require('./routes/update.route.js')
const deleteRouter = require('./routes/delete.route.js')
const queryRouter = require('./routes/query.route.js')


const dbURL = 'your-mongodb-url-here'
console.log('Connecting to Db....')
mongoose.connect(dbURL)
  .then((result) => {
    console.log('Successfuly Connected to DB')
  })
  .catch((error) => {
    console.error('DB connection error', error)
  })

const port = 3000
app.listen(port)
console.log(`Server running on port ${port}`)

app.use(cors())
app.use(express.json())

app.use('/blog/add', addRouter)
app.use('/blog/get', getRouter)
app.use('/blog/update', updateRouter)
app.use('/blog/delete',deleteRouter)
app.use('/blog/query',queryRouter)
