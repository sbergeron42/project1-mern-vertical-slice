import app from "./app.js";
import { connectDB } from "./config/db.js";

// put this in .env file
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});