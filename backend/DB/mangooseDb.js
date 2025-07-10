const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mandala',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Mongodb Connected Successfully!")
})
.catch((err)=>{
    console.log("Connection failed", err)
})

module.exports = mongoose;