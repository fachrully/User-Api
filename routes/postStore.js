const express = require('express');
const router = express.Router();
const Post = require('../models/postStore');

router.get('/store', async (req, res) => {
	try {
		const post = await Post.find();
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

//Post Data Store

router.post('/store', async (req, res) => {
	// res.send('You Connected On Roles);
	// console.log(req.body);
	const post = new Post({
		type: req.body.type,
		name: req.body.name,
		created_by: req.body.created_by,
		modified_by: req.body.modified_by,
	});

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (err) {
		res.json({ message: err });
	}
});
//Search Data store

router.get('/store/:postId', async (req, res) => {
	try {
		const srchstore = await Post.findById(req.params.postId);
		res.json(srchstore);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delete Post Data Company

router.delete('/store/:postId', async (req, res) => {
	try {
		const removedPostStore = await Post.remove({ _id: req.params.postId });
		res.json(removedPostStore);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update Post Data Store
router.patch('/store/:postId', async (req, res) => {
	//res.send('Updated');
	try {
		const updateRoles = await Post.updateOne(
			{ _id: req.params.postId },
			{
				$set: {
					type: req.body.type,
					name: req.body.name,
					created_by: req.body.created_by,
					modified_by: req.body.modified_by,
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
