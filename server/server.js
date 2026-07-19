import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
// import dns from "dns";

// dns.setServers([
//     '1.1.1.1','8.8.8.1'
// ]);

// Initialize Express App
const app = express()

await connectDB() // Connect to Database

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"))

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))