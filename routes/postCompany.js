const express = require('express');
const router = express.Router();
const Post = require('../models/postCompany');

//Get Data postCompany
router.get('/comp', async (req, res) => {
	//res.send('You Connected On Company');

	try {
		const post = await Post.find();
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

//Post Data Company
router.post('/comp', async (req, res) => {
	// res.send('You Connected On Company');
	// console.log(req.body);
	const post = new Post({
		companyName: req.body.companyName,
		createdBy: req.body.createdBy,
	});

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

//Search Data Company

router.get('/comp/:postId', async (req, res) => {
	try {
		const srchcomp = await Post.findById(req.params.postId);
		res.json(srchcomp);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delete Post Data Company

router.delete('/comp/:postId', async (req, res) => {
	try {
		const removedPostCompany = await Post.remove({ _id: req.params.postId });
		res.json(removedPostCompany);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update Post Data Company
router.patch('/comp/:postId', async (req, res) => {
	try {
		const updateComp = await Post.updateMany(
			{ _id: req.params.postId },
			{
				$set: {
					companyName: req.body.companyName,
					createdBy: req.body.createdBy,
				},
			},
		);
		res.json(updateComp);
	} catch (err) {
		res.json({ message: err });
	}
});

//Module Export Data Comp
module.exports = router;
