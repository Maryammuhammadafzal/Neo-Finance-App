import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// Cors Origins
app.use(cors());

// ,{
// 	origin: [
// 		'http://localhost:5000/',
// 		'http://localhost:3000',
// 		'https://neo-finance-app-production.up.railway.app/',
// 		'https://neo-finance-app.vercel.app/',
// 	],
// 	methods: ['GET', 'PUT', 'POST', 'DELETE'],
// 	credentials: true,
// 	allowedHeaders: ['Content-Type', 'Authorization'],
// }
app.use(express.json());

// Mongodb Connection 
mongoose.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("Mongodb connected");
	})
	.catch((error) => {
		console.log(`Mongodb error ${error}`);
	})

// Api 
app.get("/", (req, res) => {
	try {
		res.send("Neo_Finance APi is Running");
		console.log("Success");
		
	} catch (error) {
		console.log("Error", error);
		res.send("ERROR" ,error.message)

	}

})

app.listen(port, () => {
	console.log(`App listen on ${port}`);
})
