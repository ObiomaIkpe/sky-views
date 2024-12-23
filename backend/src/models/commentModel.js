const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        require:true
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     require: true
    // },
    user:String,
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const comment  = new mongoose.model("Comment", commentSchema);
module.exports = comment;
