const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db = require("./config/dbKey");
const path = require("path");
const PORT = process.env.PORT || 5000;
const routes = require("./routes/api");

// Middleware
app.use(cors());
app.use(express.json());

mongoose
	.connect(db.mongoURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("MongoDB Connected!"))
	.catch((err) => console.log(err));

app.use("/", routes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("front-end/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
	});
}

app.listen(PORT, () => console.log(`Server running ${PORT}`));
