require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(",")
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
};

app.use(
  cors({
    origin: "https://aftabkhan707.github.io", // Add your frontend URL here
  })
);
app.options('*', cors()); // Allow preflight requests for all routes

// app.use(cors(corsOptions));

app.use(express.static("public"));
const connectDB = require("./config/db");
connectDB();

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// middleware
app.use(express.json());
app.use("/api/files", require("./routes/files"));
app.use("/file", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`server is running at port:${PORT}`);
});
