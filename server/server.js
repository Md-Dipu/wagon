const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const app = require("./app");

dotenv.config({ path: path.join(process.cwd(), ".env") });

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const port = parseInt(process.env.PORT);
    app.listen(port, () => {
        console.log(colors.green.bold("Listening app at port"), port);
    });
}).catch(error => {
    console.log(colors.red.bold("Couldn't able to connect database."));
    console.error(error);
});