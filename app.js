const express = require('express')
const path = require('path')
const app = express()

const publicpath = path.resolve(__dirname, './public')
app.use(express.static(publicpath))

app.listen(3000, function () {
  console.log('servidor corriendo')
})

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'))
})
