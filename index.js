import express from "express";

// import colors from "colors";

// // import userRoutes from "./routes/userRoutes.js";
import "dotenv/config";
import db from "./config/db.js";

const app = express();

db();

app.use(express.json());

// app.use("/api", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`app is running port ${PORT}`));
