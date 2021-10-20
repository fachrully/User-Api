const mongoose = require('mongoose');

const PostCompanySchema = mongoose.Schema({
	companyName: {
		type: String,
		required: true,
	},

	createTime: {
		type: Date,
		default: Date.now,
	},

	createdBy: {
		type: String,
		required: true,
	},
	modifiedTime: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('PostComp', PostCompanySchema);
