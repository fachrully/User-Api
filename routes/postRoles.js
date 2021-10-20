const express = require('express');
const router = express.Router();
const Post = require('../models/postRoles');

//Get Data Post Roles
router.get('/roles', async (req, res) => {
	try {
		const post = await Post.find();
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

//Post Data Roles

router.post('/roles', async (req, res) => {
	// res.send('You Connected On Roles);
	// console.log(req.body);
	const post = new Post({
		name: req.body.name,
	});

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

//Search Roles Store

router.get('/roles/:postId', async (req, res) => {
	try {
		const srchroles = await Post.findById(req.params.postId);
		res.json(srchroles);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delete Post Data Company

router.delete('/roles/:postId', async (req, res) => {
	try {
		const removedPostCompany = await Post.remove({ _id: req.params.postId });
		res.json(removedPostCompany);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update Post Data Company
router.patch('/roles/:postId', async (req, res) => {
	try {
		const updateRoles = await Post.updateMany(
			{ _id: req.params.postId },
			{
				$set: {
					name: req.body.name,
				},
			},
		);
		res.json(updateRoles);
	} catch (err) {
		res.json({ message: err });
	}
});

//Module Export
module.exports = router;
