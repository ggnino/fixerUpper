const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema to model out database
const issueSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	status: { type: String, required: true },
	issue: { type: String, required: true },
	created: { type: String, required: true },
	updated: { type: String },
});

module.exports = Issue = mongoose.model("techIssues", issueSchema);
