const express = require("express");
const router = express.Router();

const Blog = require("../models/blogModel");
const comment = require("../models/commentModel");


// create a post route
router.post('/create-post', async () => {
    try {
        const newPost = new Blog({...req.body})
        await newPost.save();
        res.status(201).send({message: 'success', post: newPost})
    } catch (error) {
        console.error(error, 'error creating post');
        res.status(500).send({message: "error creating post"})
    }
})


router.get('/', async(req, res) => {
    try {

        const {search, category, location} = req.query;
        console.log(search);

        let query = {}

        if(search){
            query = {
                ...query,
                $or: [
                    {title: {$regex: search, $options: "i"}},
                    {content: {regex: search, $options: "i"}}
                ]
            }
        }

        if(category){
            query = {
                ...query,
                category: category
            }
        }

        if(location){
            query = {
                ...query,
                location: location,
                $or: [
                    {$location: {regex: search, $options: "i"}}
                ]
            }
        }


        const post = await Blog.find(query).sort({createdAt: -1});
        res.status(200).send({
            message: "all posts retrieved successfully!",
            posts: post
    })

    } catch (error) {
      console.error("error creating post", error);
      res.status(500).send({message: "error creating post!"})  
    }
})


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const postId = req.params.id

        const post = await Blog.findById(postId);

        if(!post){
            return res.status(404).send({message: "post not found!"})
        }

        // also find comments related to the post
        const comment = await comment.find({postId:postId}).populate('user', 'username email')

        res.status(200).send({
            message: "post retrieved successfully",
            post: post
        })
    } catch (error) {
        console.error("error fetching single post", error);
        res.status(500).send({message: "error fetching single post"});        
    }
})

router.patch('/update-post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await Blog.findByIdAndUpdate(postId, {
            ...req.body
        }, {new: true})

        if(!postId || !updatedPost){
            return res.status(404).send({message: "post not found!"})
        }

        res.status(200).send({
            message: "post updated successfully",
            post: updatedPost
        })
    } catch (error) {
       console.error("error updating post", error);
       res.status(500).send({message: 'error updating post'}) 
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        
        
        
        const post = await Blog.findByIdAndDelete(postId);
        if(!post){
            return res.status(404).send({message: "post not found!"})
        }

        // delete related comments
        await comment.deleteMany({postId: postId})

        res.status(204).send({
            message: "post deleted successfuly",
        })

    } catch (error) {
        console.error("error deleting post:", error);
        res.status(500).send({
            message: "Error deleting post"
        })
    }


})

// related blog
router.get('/relatedblog/:id', async(req, res) => {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send("post id is reqiured!")
        }

        const blog = await Blog.findById(id);

        if(!blog){
            return res.status(404).send({message: "post is not found!"})
        }
        

        const titleRegex = new RegExp(blog.title.split(' ').join('|'), 'i');
        const relatedQuery = {
            _id: {
                $ne: id,
                $title: {$regex: titleRegex}
            }
        }
        
        const relatedPosts = await Blog.find(relatedQuery);
        res.status(200).send({message: "related posts found",
            post: relatedPosts
        })

    } catch (error) {
        onsole.error("error fetching related post:", error);
        res.status(500).send({
            message: "Error fetching related post"
        })
    }
})



module.exports = router;