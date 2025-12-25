import mongoose from "mongoose";

export async function connectDB() {
    
    // move this in .env file
    const DB_URL = "mongodb://localhost:27017/inventorydb";
    
    try {
        await mongoose.connect(DB_URL);
        console.log(`CONNECTED TO DB: ${DB_URL}`);
        
    } catch (error) {

        // abort app if we cannot connect to db
        console.error(`FAILED TO CONNECT TO MONGO DB AT URL: ${DB_URL}. Error: ${error}`);
        process.exit(1);
    }
}