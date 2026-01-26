const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ✅ MIDDLEWARE FIRST */
app.use(cors());
app.use(express.json());              // 👈 REQUIRED
app.use(express.urlencoded({ extended: true }));

/* ✅ ROUTES AFTER */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/apply", require("./routes/applyRoutes"));

/* ✅ DB CONNECTION */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
