const express = require("express");
require("dotenv").config();
require("./db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const movieRoutes = require("./routes/studentRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
