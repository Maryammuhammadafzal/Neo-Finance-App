import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
        console.log("Mongodb connected");
        app.listen(port , console.log(`App listen on ${port}`));
})
.catch((error) => {
        console.log(`Mongodb error ${error}`);
})