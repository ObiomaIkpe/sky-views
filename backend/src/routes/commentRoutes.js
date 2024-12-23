const express = require('express');
const comment = require('../models/commentModel')

const router = express.Router();


// create a comment
router.post('/post-comment', async(req, res) => {
    
    try {
        console.log(req.body);    
        const newComment = new comment(req.body);
        await newComment.save();        
        res.status(200).send({message: "created successfully!"})
    } catch (error) {
        console.error("an error occurred while creating new comment", error)
        res.status(500).send({message: "An error occurred while posting new comment.", error})
    }

})



// get all comments
router.get('/total-comments', async(req, res) => {
    try {
        const totalComments = comment.countDocuments();
        res.status(200).send({message: "total comments count", totalComments})
    } catch (error) {
        console.error("an error occurred while all comments", error)
        res.status(500).send({message: "An error occurred while getting comments.", error})
    }
})


// 
module.exports = router;

