const mongoose = require('mongoose');

const PostRoleSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('PostRole', PostRoleSchema);
