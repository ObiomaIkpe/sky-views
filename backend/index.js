const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require('./src/routes/blogRoutes');
const commentRoutes = require('./src/routes/commentRoutes')
require ('dotenv').config()
const app = express()

// middlewares
app.use(express.json());
app.use(cors())



app.use("/api/blogs", blogRoutes)
app.use("/api/comments", commentRoutes)



// console.log(process.env)

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
}


const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hell Mars!')
})




const start = ( async () => {
    try {
        await main().then(() => console.log("MongoDB connected succesfully!")).catch(err => console.log(err)); 
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })      
    } catch (error) {
        console.log(error)
    }

})


start()
