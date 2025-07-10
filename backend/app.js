const express = require('express')
const userRoute = require('./Routes/user.routes')
const app = express()

// using the port to run backend locally
const port = 8000
const mongodb = require('./DB/mangooseDb')

app.use(express.json())
app.use('/user', userRoute)

// first route in nodejs 
app.get('/', (req, res)=>{
    res.send("welcome to backend")
})

// running the backend on the port 
app.listen(port,()=>{
    console.log(` the port is running on http://localhost:${port}`)
})


