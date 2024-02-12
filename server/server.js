const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

app.get('/friends', async(req, res) => {
  try { 
    const friends = await pool.query('SELECT * FROM friends')
    res.json(friends.rows)
  } catch (err) {
    console.error(err)
  }
});

app.get('/friends/:lastName', async (req, res) => {
    const {lastName} = req.params
    
    try {
        const person = await pool.query('SELECT * FROM friends WHERE last_name = $1', [lastName])
        res.json(person.rows)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
