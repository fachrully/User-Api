const mongoose = require('mongoose');

const PostStoreSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},

	created_time: {
		type: Date,
		default: Date.now,
	},

	created_by: {
		type: String,
		required: true,
	},

	modified_time: {
		type: Date,
		default: Date.now,
	},
	modified_by: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('PostStore', PostStoreSchema);
