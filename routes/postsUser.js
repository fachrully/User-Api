const express = require('express');
const router = express.Router();
const Post = require('../models/PostUser');

//Get Data User
router.get('/user', async (req, res) => {
	//res.send('You Are On Posts');
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

//Post Data User
router.post('/user', async (req, res) => {
	const post = new Post({
		 

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

//Search Post Data By Id
router.get('/user/:postId', async (req, res) => {
	//console.log(req.params.postId);
	try {
		const srchuser = await Post.findById(req.params.postId);
		res.json(srchuser);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delet Post By postId

router.delete('/user/:postId', async (req, res) => {
	try {
		const removedPostUser = await Post.remove({ _id: req.params.postId });
		res.json(removedPostUser);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update Post By Id User
router.patch('/user/:postId', async (req, res) => {
	try {
		const updateUser = await Post.updateMany(
			{ _id: req.params.postId },
			{
				$set: {
					name: req.body.name,
					description: req.body.description,
				},
			},
		);
		res.json(updateUser);
	} catch (err) {
		res.json({ message: err });
	}
});

//Module Exports
module.exports = router;
