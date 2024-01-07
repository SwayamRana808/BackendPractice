require('dotenv').config()
const express = require('express') //or use import express from "express"
const app = express()
const port = 3000//to listen

app.get('/', (req, res) => { //listen on route and return call back
  res.send('<h1>Hello World!</h1>')
})
app.get('/twitter', (req, res) => { //listen on route and return call back
    res.send('swayam twitter!')
  })
app.listen(process.env.PORT, () => { //process.env.variable_name
  console.log(`Example app listening on port ${port}`)
})