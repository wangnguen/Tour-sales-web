require("dotenv").config();

const app = require("./src/app");

const port = process.env.PORT || 3000;

require("./src/config/database");

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
