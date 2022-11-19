const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const {
    Pool
} = require('pg')
const PORT = process.env.PORT || 5000;

const pool = new Pool({
    connectionString: 'postgres://iaylqmfv:yxe8svXKYgxNLLKuwsmnTKpf4fEqtiZ8@satao.db.elephantsql.com/iaylqmfv'
})

app.get('/get', async(req, res) => {
    const client = await pool.connect()

    const {
        rows
    } = await client.query('SELECT * FROM users')

    client.release()

    res.send(rows)
})

app.post('/post', async(req, res) => {
    const body = req.body
    const client = await pool.connect()

    const {rows} = await client.query(`INSERT INTO users(user_name, user_email, user_phone, user_text) VALUES('${body[0].name}', '${body[0].email}', '${body[0].phone}', '${body[0].description}')`)

    client.release()

    res.json(rows)
})

app.listen(PORT, console.log(`Server running at port ${PORT}`))