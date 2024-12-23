const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description: String,
    content: String,
    coverImg: String,
    category: String,
    author: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Blog = new mongoose.model("blog", blogSchema)

module.exports = Blog;