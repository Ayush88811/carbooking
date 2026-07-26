import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
// import dns from "dns";

// dns.setServers([
//     '1.1.1.1','8.8.8.1'
// ]);

// Initialize Express App
const app = express()

await connectDB() // Connect to Database

// Middleware
app.use(
  cors({
    origin: [
      "https://carbooking-eed7-p4pke9v76-ayush24.vercel.app",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/booking',bookingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))