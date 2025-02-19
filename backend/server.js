import express from "express"; 
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js"; 
import dotenv from "dotenv"; 

dotenv.config(); 

const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.json()); 

app.use("/api/auth", authRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
    connectMongoDB(); 
}); 