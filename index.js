const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bingo Server')
})

app.get('/test', (req, res) => {
  const todos = [
    "user1", "user2"
  ]

  res.json(todos)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
