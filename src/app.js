//Dependencies
const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')

//Files
const {port} = require('./config')

//Routes
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const categoryRouter = require('./categories/categories.router')
const postRouter = require('./posts/posts.routes')

//Initial configs
const app = express()

app.use(express.json())

//Database authentication
db.authenticate()
    .then(() =>{
        console.log('Database authenticated')
    })
    .catch( err => {
        console.log(err)
    })

db.sync()
    .then(() =>{
        console.log('Database synced')
    })
    .catch( err => {
        console.log(err)
    })

initModels()
//A middleware is a function that executes a request before another callback


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users/`
    })
})

//Using the routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/posts', postRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
