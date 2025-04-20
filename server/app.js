import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express();

app.use(
	cors({
		origin: [
			'http://localhost:5000/',
			'http://localhost:3000',
			// 'https://batch11-mern-stack-1.onrender.com',
			'https://neo-finance-app.vercel.app/',
		],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());

app.get("/" , (req , res) => {
        res.send("Neo_Finance APi is Running");
})

export default app;